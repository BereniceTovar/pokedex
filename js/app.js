/*$(document).ready(function(){

    $("#buscar-pokemon").click(function(event){
        event.preventDefault();
        console.log("Entro");
        var param = $("#pokeInput").val();
        console.log(param);
        $('#characters-container').html('');

        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon',
            success: function(response){
            var pokeURL = 'https://pokeapi.co/api/v2/pokemon/' + param;
            var template = $('#template-character').html();
            var $characters = $('#characters-container');
            console.log(template);
            //response.items.forEach(function(character){
                $.getJSON(pokeURL, function(){

                    data = {
                        //name: pokemon.results.url,
                    }

                    console.log(data);
                    console.log(JSON.stringify(data, null, "  "));
            //
                });
            // })

            var filledTemplate = fillTemplate(template, pokeURL); //Combina nuestro template con los datos
            console.log(filledTemplate);
            $characters.append(filledTemplate);
            }

        })

    })
})

//FUNCIONES QUE USAMOS PARA LAS PLANTILLAS Y PODER IMPRIMIR LA INFORMACIÓN
//PLANTILLA
function fillTemplate(template, data) {
    for(var index in data){
        var value = data[index];
        template = template.replace(new RegExp('{{'+index+'}}', 'g'), escapeHtml(value) );
    };
    return template;
}
//FUNCIÓN QUE SALVA A ELEMENTOS Y SIMBOLOS
function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
*/
/*
$(document).ready(function(){

    $("#buscar-pokemon").click(function(event){
        event.preventDefault();
        console.log("Entro");
        $("#elementos").empty();
        var param = $("#pokeInput").val();
        searchPokemon(param);


        function searchPokemon(){
            $.ajax({
                url: 'https://pokeapi.co/api/v2/pokemon/' + param,
                type: 'GET',

        
                success: function (response){
                    console.log(response);
                    $('.name').append('<span>' + response.name + '</span>');
                    $('.type').empty();
                    response.types.forEach(function(){
                        var typePokemon = types.type.name;
                        $('.type').append('<span>' + typePokemon + '  </span>')
                    })

                    error: function error () {
                        console.log('Error');
                    }
                }
            })
        }


    });

})
*/

/*$(document).ready(function(){

    $("#buscar-pokemon").click(function(event){
        console.log("Entro");
        $("#elementos").empty();
        var param = $("#pokeInput").val();
        pokeSubmit(param);
    });

    function pokeSubmit(param){
        var pokeURL = "https://pokeapi.co/api/v2/" + param;
        $.getJSON(pokeURL, function(data){
            console.log(data);
            console.log(JSON.stringify(data, null, "  "));
    
        });
    }
})
*/
/*
$.getJSON(pokeURL, function(){

    data = {
        name: pokemon.results.url,
    }

    console.log(data);
    console.log(JSON.stringify(data, null, "  "));
});*/


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
            let url = pokemon.pokemon_species.url;
            let nameasd = pokemon.pokemon_species.name;
            $("#elementos").append(armarTemplate(nameasd, url));
        })
    }
    
    
    var armarTemplate = function(name, url){
        var t = "<div class='elemento'>" + name + "</div>"
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
