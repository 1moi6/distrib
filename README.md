<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="MinhaCss.css">
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
</head>
<body>
  <!-- Inicio do segundo grid colunas -->
  <div class="cabeca">
    <p class="pcbc"> Departamento de Matemática <br> distribuição de encargos </p>
  </div>

    <div class="meucontainer">
      <div class="mcol">
        <p> Docentes do departamento</p>
        <div class="cllin1" id="MeuGrupo">
        </div>
      </div>
      <div class="mcol">
        <p> Disciplinas para alocação </p>
        <div class="mlin1">
          <div class="msel">
            <select class="mselS" id="MeuSel" style="border: 0px;">
              <option class="mopt" value=-1 style="border: 0px;"> Selecione a disciplina para alocação </option>
            </select>
          </div>
          <div>
            <button type="button" class="btn" id="atribuir">Atribuir ao professor</button>
          </div>
        </div>
        <div class="mlin2" id="disatbprf">
  
        </div>
        <div class="mlin3">
          <table class="mtbl" id="mtblId">
            <tr>
              <th style="width:20%">Segunda</th>
              <th style="width:20%">Terça</th> 
              <th style="width:20%">Quarta</th>
              <th style="width:20%">Quinta</th> 
              <th style="width:20%">Sexta</th>
            </tr>
            <tr>
              <td id='cl0'></td> 
              <td id='cl1'></td>
              <td id='cl2'></td> 
              <td id='cl3'></td>
              <td id='cl4'></td>
            </tr>
            <tr>
              <td id='cl5'></td> 
              <td id='cl6'></td>
              <td id='cl7'></td> 
              <td id='cl8'></td>
              <td id='cl9'></td>
            </tr>
            <tr>
              <td id='cl10'></td> 
              <td id='cl11'></td>
              <td id="cl12"></td> 
              <td id='cl13'></td>
              <td id='cl14'></td>
            </tr>
            <tr>
              <td id='cl15'></td> 
              <td id='cl16'></td>
              <td id='cl17'></td> 
              <td id='cl18'></td>
              <td id='cl19'></td>
            </tr>
            <tr id="colorido">
              <td></td> 
              <td></td>
              <td></td> 
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td id='cl30'></td> 
              <td id='cl31'></td>
              <td id='cl32'></td> 
              <td id='cl33'></td>
              <td id='cl34'></td>
            </tr>
            <tr>
              <td id='cl35'></td> 
              <td id='cl36'></td>
              <td id='cl37'></td> 
              <td id='cl38'></td>
              <td id='cl39'></td>
            </tr>
            <tr>
              <td id='cl40'></td> 
              <td id='cl41'></td>
              <td id='cl42'></td> 
              <td id='cl43'></td>
              <td id='cl44'></td>
            </tr>
            <tr>
              <td id='cl45'></td> 
              <td id='cl46'></td>
              <td id='cl47'></td> 
              <td id='cl48'></td>
              <td id='cl49'></td>
            </tr>
            <tr id="colorido">
              <td></td> 
              <td></td>
              <td></td> 
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td id='cl55'></td> 
              <td id='cl56'></td>
              <td id='cl57'></td> 
              <td id='cl58'></td>
              <td id='cl59'></td>
            </tr>
            <tr>
              <td id='cl60'></td> 
              <td id='cl61'></td>
              <td id='cl62'></td> 
              <td id='cl63'></td>
              <td id='cl64'></td>
            </tr>
            <tr>
              <td id='cl65'></td> 
              <td id='cl66'></td>
              <td id='cl67'></td> 
              <td id='cl68'></td>
              <td id='cl69'></td>
            </tr>
             <tr>
              <td id='cl70'></td> 
              <td id='cl71'></td>
              <td id='cl72'></td> 
              <td id='cl73'></td>
              <td id='cl74'></td>
            </tr>
             <tr>
              <td id='cl75'></td> 
              <td id='cl76'></td>
              <td id='cl77'></td> 
              <td id='cl78'></td>
              <td id='cl79'></td>
            </tr>
            
          </table>
        </div>
      </div>
      <div class="mcol" id="c3">
        <p> Tabela de disciplinas </p>
        <div class="dbtna">
          <button type="button" class="btna" id="atribtblcnt" onclick="atbbtn()" >Atribuídas</button>
          <button type="button" class="btna" id="natribtblcnt" onclick="natbbtn()">Não atribuídas</button>
        </div>
        <div id="tblatribuidas">
        </div>
      </div>
    </div>
    <div class="fim">
    <p class="pcbc"> Tabela completa <button type="button" id="download">Baixar</button></p>
    <div id="tblcompleta">
    </div>
  </div>
</body>
  <script src="MeusScripts.js" type="text/javascript"></script>
</html>
