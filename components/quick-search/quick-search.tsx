import { InstantSearch, SearchBox, Hits } from "react-instantsearch-hooks-web";
import Link from "next/link";
import algoliasearch from "algoliasearch/lite";
import { GoSearch } from "react-icons/go";
import { useState } from "react";

interface QuickSearchProps {
  propertyName?: string;
}

export default function QuickSearch({}: QuickSearchProps) {
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
      <SearchBox
        submitIconComponent={() => (
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <GoSearch className="w-6 h-6 text-black" />
          </div>
        )}
        resetIconComponent={() => null}
        classNames={{
          root: "relative",
          form: "flex mb-3",
          input:
            "py-3 px-12 m-1 w-full border-2 border-gray-400 placeholder:text-black rounded",
        }}
        placeholder={"Quick search"}
      />
      {query && (
        <div className="p-2 border">
          <Hits
            hitComponent={(data: { hit: any }) => (
              <div>
                <div className="py-1 my-1">
                  <Link href={data.hit.url}>{data.hit.title}</Link>
                </div>
              </div>
            )}
          />
        </div>
      )}
    </InstantSearch>
  );
}
