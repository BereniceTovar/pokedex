$(document).ready(function(){

        console.log("Entro");
        $("#elementos").empty();

    var dibujarPokemones = function(pokemones){
        console.log(pokemones);
        pokemones.forEach(function(pokemon){
            let id = pokemon.entry_number;
            let imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
            let url = pokemon.pokemon_species.url;
            let name = pokemon.pokemon_species.name.charAt(0).toUpperCase() + pokemon.pokemon_species.name.slice(1);
            $("#elementos").append(armarTemplate(name, url, imagen, id));
        })
    }
    
    
    var armarTemplate = function(name, url, imagen,id){
        var t = "<div class='cont-pokemon' data-id='"+id+"'><div class='elemento'>" + name + "</div><img class='img-pkmn' src='" + imagen + "' alt='imagen-pokemon'></div>" ;
        return t;
    }
    
    var ajaxPokemon = function(pokemon){
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokedex/1',
            type: 'GET',
            datatype: 'json',
        })
        .done(function(response){
            console.log(response);
            dibujarPokemones(response.pokemon_entries);
            //Termina carga pokemones
        })
        .fail(function(error){
            console.log('Error');
        });
    }

    ajaxPokemon();
    

    $(document).on("click", '.cont-pokemon', function(event) { 
        console.log("Info pokemon");

        var dibujarPokemones2 = function(pokemones){
            console.log(pokemones);
                let name = pokemones.name.charAt(0).toUpperCase() + pokemones.name.slice(1);
                let id = pokemones.id;
                let imagen = pokemones.sprites.front_default;
                let speed = pokemones.stats[0].base_stat;
                let specialDefense = pokemones.stats[1].base_stat;
                let specialAttack = pokemones.stats[2].base_stat;
                let defense = pokemones.stats[3].base_stat;
                let attack = pokemones.stats[4].base_stat;
                let hp = pokemones.stats[5].base_stat;
                $("#elementos").remove();
                $("#elementos-pkm").append(armarTemplate2(name, id, imagen, speed, specialDefense, specialAttack, defense, attack, hp));
        }
        
        
        var armarTemplate2 = function(name, id, imagen, speed, specialDefense, specialAttack, defense, attack, hp){
            var t = "<div class='info-pokemon'><div>" + name + "</div><div>#" + id + "</div><img class='specific-info' src='"
            + imagen + "' alt='pokemon'><div class='container-info-p'><span class='info-p'>Speed: " + speed + "</span><br><span class='info-p'>Special Defense: " 
            + specialDefense + "</span><br><span class='info-p'>Special Attack: " + specialAttack 
            + "</span><br><span class='info-p'>Defense: " + defense + "</span><br><span class='info-p'>Attack: " 
            + attack + "</span><br><span class='info-p'>HP: " + hp + "</span></div></div>" ;
            return t;
        }
        
        var ajaxPokemon2 = function(pokemon_id){
            $.ajax({
                url: 'https://pokeapi.co/api/v2/pokemon/'+ pokemon_id,
                type: 'GET',
                datatype: 'json',
            })
            .done(function(response){
                console.log(response);
                dibujarPokemones2(response);
            })
            .fail(function(error){
                console.log('Error');
            });
        }

        ajaxPokemon2($(this).data('id'));

    });
})


/*
CÓDIGO FUNCIONAL POKEMONES
$(document).ready(function(){

        console.log("Entro");
        $("#elementos").empty();

    var dibujarPokemones = function(pokemones){
        console.log(pokemones);
        pokemones.forEach(function(pokemon){
            let id = pokemon.entry_number;
            let imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
            let url = pokemon.pokemon_species.url;
            let name = pokemon.pokemon_species.name;
            $("#elementos").append(armarTemplate(name, url, imagen, id));
        })
    }
    
    
    var armarTemplate = function(name, url, imagen,id){
        var t = "<div class='cont-pokemon' data-id='"+id+"'><div class='elemento'>" + name + "</div><img class='img-pkmn' src='" + imagen + "' alt='imagen-pokemon'></div>" ;
        return t;
    }
    
    var ajaxPokemon = function(pokemon){
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokedex/1',
            type: 'GET',
            datatype: 'json',
        })
        .done(function(response){
            console.log(response);
            dibujarPokemones(response.pokemon_entries);
            //Termina carga pokemones
        })
        .fail(function(error){
            console.log('Error');
        });
    }

    ajaxPokemon();
    

    $(document).on("click", '.cont-pokemon', function(event) { 
        console.log("Info pokemon");

        var dibujarPokemones2 = function(pokemones){
            console.log(pokemones);
            pokemones.forEach(function(pokemon){
                let id = pokemon.id;
                let imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
                let name = pokemon.name;
                let speed = "Speed  " + pokemon.base_stat;
                let specialDefense = "Special Defense  " + pokemon.base_stat;
                $("#elementos").append(armarTemplate2(name, imagen, speed, specialDefense));
            })
        }
        
        
        var armarTemplate2 = function(name, imagen, speed, specialDefense){
            var t = "<div id='info-pokemon'><div class='elemento'>" + name + "</div><img class='img-pkmn' src='" 
            + imagen + "' alt='imagen-pokemon'><div>" + speed + "</div><div>" + specialDefense + "</div></div>" ;
            return t;
        }
        
        var ajaxPokemon2 = function(pokemon_id){
            $.ajax({
                url: 'https://pokeapi.co/api/v2/pokemon/'+ pokemon_id,
                type: 'GET',
                datatype: 'json',
            })
            .done(function(response){
                console.log(response);
                //dibujarPokemones2(response.states);
            })
            .fail(function(error){
                console.log('Error');
            });
        }

        ajaxPokemon2($(this).data('id'));

    });
})
*/