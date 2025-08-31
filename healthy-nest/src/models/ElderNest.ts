// models/ElderNest.ts

// 🟢 Used in listings (cards, pagination)
export interface Address {
  id: number;
  Line1?: string;
  Line2?: string;
  Locality?: string;
  City?: string;
  State?: string;
  Country?: string;
  PostalCode?: string;
  Landmark?: string;
  Latitude?: number | null;
  Longitude?: number | null;
}

export interface Pricing {
  id: number;
  minimum?: number;
  maximum?: number;
  PricingUnit?: "DAY" | "MONTH" | "YEAR";
  SecurityDeposit?: string;
  AdmissionFee?: string;
}

export interface Banner {
  id: number;
  documentId?: string;
  name?: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: any;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: any;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
}


export interface GalleryImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface GalleryImageFormats {
  large?: GalleryImageFormat;
  medium?: GalleryImageFormat;
  small?: GalleryImageFormat;
  thumbnail?: GalleryImageFormat;
}

export interface GalleryImage {
  id: number;
  documentId?: string;
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: GalleryImageFormats;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: any;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
}

export interface ElderNestSummary {
  id: number;
  documentId: string;
  Name: string;
  Description?: string;
  Address?: Address;
  Pricing?: Pricing;
  Banner?: Banner;
}

// 🟢 Extended for detail page (uses ElderNestSummary as base)
export interface ElderNestDetail extends ElderNestSummary {
  OwnershipType?: string;
  MaximumCapacity?: number;
  AvailableVacancies?: number;
  EstablishedAt?: Date;
  OnBoardedAt?: Date;
  Amenities?: {
    id: number;
    Title: string;
    Description?: string | null;
  }[];
  Facilities?: {
    id: number;
    Title: string;
    Description?: string | null;
  }[];
  Specializations?: {
    id: number;
    Title: string;
    Description?: string | null;
  }[];
  CareTypes?: {
    id: number;
    Title: string;
    Description?: string | null;
  }[];
  MedicalSupport?: {
    id: number;
    Title: string;
    Description?: string | null;
  }[];
  MealSupport?: {
    id: number;
    Title: string;
    Description?: string | null;
  }[];
  NestGallery?: GalleryImage[];
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
}

// 🟢 Utility: API Pagination response wrapper
export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
