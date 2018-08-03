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
            $("#elementos").append(armarTemplate(name, url, imagen));
        })
    }
    
    
    var armarTemplate = function(name, url, imagen){
        var t = "<div id='cont-pokemon'><div class='elemento'>" + name + "</div><img class='img-pkmn' src='" + imagen + "' alt='imagen-pokemon'></div>" ;
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
        })
        .fail(function(error){
            console.log('Error');
        });

        function response(data) {
            console.log(data);
        }
    }

    ajaxPokemon();
    //Termina carga pokemones

    $(document).on("click", '#cont-pokemon', function(event) { 
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
        
        var ajaxPokemon2 = function(pokemon){
            $.ajax({
                url: 'https://pokeapi.co/api/v2/pokemon/',
                type: 'GET',
                datatype: 'json',
            })
            .done(function(response){
                //console.log(response);
                dibujarPokemones2(response.states);
            })
            .fail(function(error){
                console.log('Error');
            });
    
            function response(data) {
                console.log(data);
            }
        }
    
        ajaxPokemon2();

        
    });
    //Termina segunda llamada ajax / Click infor Pokemon
})


/*
CÓDIGO FUNCIONAL POKEMONES
$(document).ready(function(){

    $("#buscar-pokemon").click(function(event){
        console.log("Entro");
        $("#elementos").empty();
        var pokemon = $("#pokeInput").val();
        ajaxPokemon(pokemon);
    });

    
    var dibujarPokemones = function(pokemones){
        var pokemon = "";
        var url = "";
        console.log(pokemones);
        pokemones.forEach(function(pokemon){
            let id = pokemon.entry_number;
            let imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
            console.log(imagen);
            let url = pokemon.pokemon_species.url;
            let name = pokemon.pokemon_species.name;
            $("#elementos").append(armarTemplate(name, url, imagen));
        })
    }
    
    
    var armarTemplate = function(name, url, imagen){
        var t = "<div class='elemento'>" + name + "</div><img src='" + imagen + "' alt='imagen-pokemon'>" ;
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
        })
        .fail(function(error){
            console.log('Error');
        });

        function response(data) {
            console.log(data);
        }
    }
})

*/