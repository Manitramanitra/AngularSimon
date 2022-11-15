import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;//on a typé pokemon avec un tableau d'objet de pokemon
  pokemonSelected: Pokemon|undefined;
  ngOnInit() {
    // console.log(this.pokemon) le mot clé this se répére a au class lui même
    // this.selectPokemon(this.pokemon[10])

  }
  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon=>pokemon.id===+pokemonId)
    // const index = +(event.target as HTMLInputElement).value // le "+" fonction comme parseInt ou le caste number car event.target.value retourne un string
    if(pokemon){
      console.log(`voici le pokemon choisi ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }else{
      this.pokemonSelected = undefined;
      console.log('le pokemon que vous avez entrer n\'existe pas');
    }
  }
}
