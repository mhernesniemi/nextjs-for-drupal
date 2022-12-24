import { InstantSearch, SearchBox, Hits } from "react-instantsearch-hooks-web";
import Link from "next/link";
import algoliasearch from "algoliasearch/lite";
import { GoSearch } from "react-icons/go";
import { useState } from "react";

interface QuickSearchProps {
  setIsOpen?: any;
}

export default function QuickSearch({ setIsOpen }: QuickSearchProps) {
  const [query, setQuery] = useState("");

  const searchClient = algoliasearch(
    process.env.ALGOLIA_APPLICATION_ID,
    process.env.ALGOLIA_API_KEY
  );

  return (
    <InstantSearch
      indexName="dev_drupal"
      searchClient={searchClient}
      searchFunction={function (search) {
        setQuery(search.state.query);
        search.search();
      }}
    >
      <div className="sticky top-0 p-6 bg-gray-800">
        <div className="flex items-center gap-6">
          <SearchBox
            submitIconComponent={() => (
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <GoSearch className="w-6 h-6 text-white" />
              </div>
            )}
            autoFocus
            resetIconComponent={() => null}
            classNames={{
              root: "relative w-full",
              input:
                "py-3 px-12 w-full border border-gray-400 bg-gray-700 placeholder:text-white rounded",
            }}
            placeholder={"Quick search"}
          />
          <div>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </div>
      </div>

      <div className="lg:h-[500px] px-6 mb-10">
        {query && (
          <Hits
            hitComponent={(data: { hit: any }) => (
              <div>
                <div className="py-2 my-1">
                  <Link href={data.hit.url} className="text-lg">
                    {data.hit.title}
                  </Link>
                </div>
              </div>
            )}
          />
        )}
      </div>
    </InstantSearch>
  );
}
