$(document).ready(function(){

        console.log("Entro");
        $("#elementos").empty();

    var dibujarPokemones = function(pokemones){
        var pokemon = "";
        var url = "";
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
        var t = "<div id='cont-pokemon'><div class='elemento'>" + name + "</div><img src='" + imagen + "' alt='imagen-pokemon'></div>" ;
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