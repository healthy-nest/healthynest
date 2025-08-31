import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ExploreHero from "../components/ExploreHero";
import FiltersSidebar from "../components/FiltersSidebar";
import Dropdown from "../components/Dropdown";
import  ElderCareCard from "../components/ElderNestCard";
import { getElderNests } from "../services/ElderNestService";
import { ElderNestSummary } from "../models/ElderNest";

const PAGE_SIZE = 5;

const ExploreNests = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const source = params.get("source");

  const showFilters = source !== "quick-view";

  // State
  const [nests, setNests] = useState<ElderNestSummary[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch data
  const fetchNests = async (currentPage: number) => {
    try {
      setLoading(true);
      setError(null);
      const { nests: fetchedNests, pagination } = await getElderNests({
        page: currentPage,
        pageSize: PAGE_SIZE,
      });
      setNests((prev) => [...prev, ...fetchedNests]);
      setTotalPages(pagination.pageCount);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch Elder Nests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNests(page);
  }, [page]);

  // Load more handler
  const loadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <ExploreHero />

      <div className="max-w-[1440px] mx-auto px-3 md:px-6 lg:px-8 flex flex-col md:flex-row gap-6">
        {showFilters && <FiltersSidebar />}
        <main className="flex-1 py-4">
          <Dropdown />

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="space-y-4">
            {nests.map((nest) => (
              <ElderCareCard key={nest.documentId} data={nest} />
            ))}

            {loading && <p className="text-gray-500 text-center mt-4">Loading...</p>}
          </div>

          <div className="mt-6 text-center">
            {page < totalPages && (
              <button
                onClick={loadMore}
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded border hover:bg-gray-200"
                disabled={loading}
              >
                {loading ? "Loading..." : "Load More Homes"}
              </button>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default ExploreNests;
