 function contar() {
            var ini = document.getElementById('ini')
            var fim = document.getElementById('fim')
            var pass = document.getElementById('pass')
            var res = document.getElementById('res')

            if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) { alert('Erro!! Por favor, preencha todos os campos!') 
            } else {
                res.innerHTML = 'contando:'

                var i = Number(ini.value)
                var f = Number(fim.value)
                var p = Number(pass.value)

                if (p<=0) {
                    alert('Passo inválido considerando passo 1')
                    p = 1
                }

                if (i < f) {
                    for (var c = i;c<=f;c+=p) {
                         res.innerHTML += `${c} `
                    }
                } else { 
                    
                    for(var c = i; c >= f; c -= p) {
                        res.innerHTML += `${c} `
                    }

                }

                    res.innerHTML += ` `
            }

        }