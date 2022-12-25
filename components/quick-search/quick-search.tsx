import { RefObject } from "react";
import { InstantSearch, Hits } from "react-instantsearch-hooks-web";
import Link from "next/link";
import algoliasearch from "algoliasearch/lite";
import { SearchBox } from "./search-box";

interface QuickSearchProps {
  setIsOpen?: any;
  inputRef?: RefObject<HTMLInputElement>;
}

export default function QuickSearch({ setIsOpen, inputRef }: QuickSearchProps) {
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APPLICATION_ID,
    process.env.ALGOLIA_API_KEY
  );

  return (
    <InstantSearch
      indexName="dev_drupal"
      searchClient={searchClient}
      searchFunction={function (search) {
        if (search.getQuery().query.length > 0) return search.search();
      }}
    >
      <div className="sticky top-0 p-6 bg-gray-800">
        <div className="flex items-center gap-6">
          <SearchBox placeholder="Quick Search" inputRef={inputRef} />
          <div>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </div>
      </div>

      <div className="lg:h-[500px] px-6 mb-10">
        <Hits
          hitComponent={(data: { hit: any }) => (
            <div className="py-2 my-1">
              <Link href={data.hit.url} className="text-lg">
                {data.hit.title}
              </Link>
            </div>
          )}
        />
      </div>
    </InstantSearch>
  );
}
