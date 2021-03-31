
import { useRouter } from 'next/router'
import Loading from '../../components/general/Loading'
import { wait } from '../../misc/timings'
import ProductBox from '../../components/general/ui/ProductBox'
import Head from 'next/head'

let temp = 0


import algoliasearch from "algoliasearch/lite";
import { withInstantSearch } from "next-instantsearch";
import {
  Configure,
  Highlight,
  Hits,
  Pagination,
  RefinementList,
  SearchBox,
} from "react-instantsearch-dom";

const searchClient = algoliasearch("Y0LMMFZYTE", "fde5759758a5476d148a29187e488df8");

const HitComponent = ({ hit }) => <ProductBox product={hit} />

const Page = ({searchState}) => (
  <>
    <Head>
      <title> Search - {searchState.query} | Square Mile Market</title>
    </Head>
    <h1>Search</h1>
    <div className="ais">
      <Configure hitsPerPage={12} />
      <SearchBox />
      <RefinementList attribute="categories" />
      <Hits hitComponent={HitComponent} />
      <Pagination />
    </div>

  </>
);

Page.getInitialProps = async () => ({
  indexName: "PRODUCTS",
  // You may want to set some default searchState.
  // This will be merged on to state from the url.
  searchState: {
    refinementList: {
      categories: [""],
    },
  },
});

export default withInstantSearch({
  searchClient,
})(Page);