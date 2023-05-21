import Block1 from "../../components/Description/Block1"
import ImagePokemon from "../../components/ImagePokemonDetail/ImagePokemon"
import StatsList from "../../components/Stats/StatsList"
import PokemonHeader from "../../components/pokemonDetaiHeader/PokemonHeader"
import "./PokemonDetail.css"
import PokeballBackground from "../../assets/Pokeball.svg"
import { useParams } from "react-router-dom"
import useGetPokemonDetail from "../../hooks/useGetPokemonDetail"
import { getColorType } from "../../utils/getColorType"
import Loader from "../../components/Load/Loader"
import { IPokemon } from "../../Types/interface"
import { useDispatch } from "react-redux"
import { addPokemon, deletePokemon } from "../../redux/actions/PokemonAction"
import Swal from "sweetalert2"
import useExitPokemonPokedex from '../../hooks/useExitPokemonPokedex';
import { useEffect } from 'react';


export const PokemonDetail = () => {
  
  const params = useParams();
  const { Pokemon } = useGetPokemonDetail(params.id)
  const color:string = getColorType(Pokemon, 0)
  const dispatch = useDispatch();
  const { ExistPokedex, setExistPokedex} = useExitPokemonPokedex(params.id)


  const addPokemonPokedex = ()=>{
    if (Pokemon != undefined) {
      const newPokemon:IPokemon = {
        id : Pokemon.id,
        image : Pokemon.sprites.other?.["official-artwork"].front_default,
        name : Pokemon.name, 
        order : Pokemon.order,
        types : Pokemon.types
      }
      dispatch(addPokemon(newPokemon))
      setExistPokedex(true)
    }
  }

  const deletePokemonPokedex = ()=>{
    if (Pokemon != undefined) {
      const newPokemon:IPokemon = {
        id : Pokemon.id,
        image : Pokemon.sprites.other?.["official-artwork"].front_default,
        name : Pokemon.name,
        order : Pokemon.order,
        types : Pokemon.types
      }
      dispatch(deletePokemon(newPokemon))
      setExistPokedex(false)
    }
  }

  const sweetAlertAdd = ()=>{

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
      swalWithBootstrapButtons.fire({
        title: `Quieres agregar a ${Pokemon?.name} a tu pokedex?`,
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Agregado',
            'Se agrego correctamente a tu pokedex',
            'success'
          )
          addPokemonPokedex();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            '',
            'error'
          )
        }
      })
  }
  const sweetAlertDeleted = ()=>{

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
      swalWithBootstrapButtons.fire({
        title: `Quieres eliminar a ${Pokemon?.name} de tu pokedex?`,
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Eliminado',
            'Se elimino correctamente a tu pokedex',
            'success'
          )
          deletePokemonPokedex();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            '',
            'error'
          )
        }
      })
  }

  return (
    <div className="pokemon-detail-container" style={{backgroundColor: color}}>
      <img className="pokeball-background" src={PokeballBackground} alt="" />
      {
        !Pokemon && <Loader relative={true} /> 
      }
      {
        Pokemon && (
          <>
            <PokemonHeader pokemon={Pokemon} />
            <ImagePokemon pokemon={Pokemon} />
            <div className="description-container" >
              <h4 style={{color: color}} >About</h4>
              
              <Block1 pokemon={Pokemon}/>
              <StatsList pokemon={Pokemon}  color={color}/>

            </div >
           { 
           !ExistPokedex && <div className="button-contain">
              <button onClick={sweetAlertAdd}>Agregar a mi Pokedex</button>
            </div>}
            {
              ExistPokedex && <div className="button-contain">
              <button onClick={sweetAlertDeleted}>Eliminar de mi Pokedex</button>
            </div>
            }
            
          </>

        )
      }
    </div>
  )
}
