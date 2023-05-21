import InfiniteScroll from 'react-infinite-scroll-component';
import useGetPokemons from '../../../hooks/useGetPokemons';
import CardPokemon from '../../Card-pokemon/cardPokemon';
import "./List.css"
// Componente de scroll infinito
const InfiniteScrollComponent= () => {
  const { ListPokemon, loadMore } = useGetPokemons();

  return (
    <section className="list-container">
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
