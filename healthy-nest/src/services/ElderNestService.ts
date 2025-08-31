// services/elderNestService.ts
import { ElderNestSummary, ElderNestDetail } from "../models/ElderNest";
import { fetchFromStrapi as fetch  } from "./api";

const API_BASE_URL = "http://localhost:1337";

interface PaginationOptions {
  page?: number;
  pageSize?: number;
}

interface ElderNestsResponse {
  data: any[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// 1️⃣ Get all nests (summary)
export async function getElderNests(
  options: PaginationOptions = { page: 1, pageSize: 10 }
): Promise<{ nests: ElderNestSummary[]; pagination: ElderNestsResponse["meta"]["pagination"] }> {
  const { page = 1, pageSize = 10 } = options;

  const endpoint = `/api/elder-nests?fields=id,Name,Description,documentId&populate[Address][fields]=Locality,City&populate[Pricing][fields]=minimum,maximum,PricingUnit&populate[Banner][fields]=url,formats&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

  const data = await fetch<ElderNestsResponse>(endpoint);

  const nests: ElderNestSummary[] = data.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    Name: item.Name,
    Description: item.Description,
    Address: item.Address,
    Pricing: item.Pricing,
    Banner: item.Banner,
  }));

  return { nests, pagination: data.meta.pagination };
}

// 2️⃣ Get single nest by documentId (full object)
export async function getElderNestByDocumentId(documentId: string): Promise<ElderNestDetail> {
  console.log("Fetching elder nest details for documentId:", documentId);
  const data = await fetch<{ data: any }>(
    `/api/elder-nests/${documentId}?populate=*`
  );
  const item = data.data;
  if (!item) throw new Error("No data found for this nest.");
  return {
    id: item.id,
    documentId: item.documentId,
    Name: item.Name,
    Description: item.Description,
    Address: item.Address,
    Pricing: item.Pricing,
    Banner: item.Banner ? {
      ...item.Banner,
      createdAt: item.Banner.createdAt ? new Date(item.Banner.createdAt) : undefined,
      updatedAt: item.Banner.updatedAt ? new Date(item.Banner.updatedAt) : undefined,
      publishedAt: item.Banner.publishedAt ? new Date(item.Banner.publishedAt) : undefined,
    } : undefined,
    OwnershipType: item.OwnershipType,
    MaximumCapacity: item.MaximumCapacity,
    AvailableVacancies: item.AvailableVacancies,
    EstablishedAt: item.EstablishedAt ? new Date(item.EstablishedAt) : undefined,
    OnBoardedAt: item.OnBoardedAt ? new Date(item.OnBoardedAt) : undefined,
    Amenities: item.Amenities,
    Facilities: item.Facilities,
    Specializations: item.Specializations,
    CareTypes: item.CareTypes,
    NestGallery: item.NestGallery ? item.NestGallery.map((g: any) => {
      // Helper to prefix base URL if needed
      const prefixUrl = (url?: string) =>
        url && url.startsWith("/") ? `${API_BASE_URL}${url}` : url;
      // Patch all formats
      const patchedFormats = g.formats
        ? Object.fromEntries(
            Object.entries(g.formats).map(([key, val]: [string, any]) => [
              key,
              val && val.url ? { ...val, url: prefixUrl(val.url) } : val,
            ])
          )
        : undefined;
      return {
        ...g,
        url: prefixUrl(g.url),
        formats: patchedFormats,
        createdAt: g.createdAt ? new Date(g.createdAt) : undefined,
        updatedAt: g.updatedAt ? new Date(g.updatedAt) : undefined,
        publishedAt: g.publishedAt ? new Date(g.publishedAt) : undefined,
      };
    }) : undefined,
    createdAt: item.createdAt ? new Date(item.createdAt) : undefined,
    updatedAt: item.updatedAt ? new Date(item.updatedAt) : undefined,
    publishedAt: item.publishedAt ? new Date(item.publishedAt) : undefined,
  };
}

// 3 Get Image
export async function getImageUrl(imagePath: string): Promise<string> {
  return `${API_BASE_URL}${imagePath}`;
}