import { RefObject } from "react";
import { InstantSearch, Hits } from "react-instantsearch-hooks-web";
import Link from "next/link";
import algoliasearch from "algoliasearch/lite";
import { SearchBox } from "./search-box";

interface QuickSearchProps {
  setOpen?: any;
  inputRef?: RefObject<HTMLInputElement>;
}

export default function QuickSearch({ setOpen, inputRef }: QuickSearchProps) {
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APPLICATION_ID,
    process.env.ALGOLIA_API_KEY
  );

  return (
    <InstantSearch indexName="dev_drupal" searchClient={searchClient}>
      <div className="sticky top-0 p-6 bg-gray-800">
        <div className="flex items-center gap-6">
          <SearchBox placeholder="Quick Search" inputRef={inputRef} />
          <div>
            <button onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </div>
      </div>

      <div className="sm:h-[500px] px-6 mb-10">
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
