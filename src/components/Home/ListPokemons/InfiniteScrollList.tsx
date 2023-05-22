import InfiniteScroll from 'react-infinite-scroll-component';
import useGetPokemons from '../../../hooks/useGetPokemons';
import CardPokemon from '../../Card-pokemon/cardPokemon';
import "./List.css"
import FilterType from '../FilterType/FilterType';
import { useEffect } from 'react';
// Componente de scroll infinito
const InfiniteScrollComponent= () => {
  const { ListPokemon, loadMore, TypeSelected, setType} = useGetPokemons();
  useEffect(() => {
    ListPokemon
  }, [ListPokemon])
 

  return (
    <section className="list-container">
      <FilterType setType={setType} type={TypeSelected} />
      
        {/* <div className="contain"> */}
      <InfiniteScroll
        dataLength={ListPokemon?.length || 0}
        next={loadMore}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
        style={{overflow: 'hidden'}}
      >
        <>
          <div className="contain">
            {
                ListPokemon?.map((p, i)=> {
                  return (<CardPokemon key={i} pokemon={p} />)
                }
                )
            }
          </div>
            
          
        </>
      </InfiniteScroll>
    </section>
  );
};

export default InfiniteScrollComponent;
