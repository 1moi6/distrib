function ArrToCSV(disciplinas, curso, hor, cargahor, profs, Atrib, filename) {
  var data = [];
  row = ["Ordem","Disciplina","Curso","Horário","Carga horária","Professor"]
  data.push(row.join(",")); 
  for (var i = 0; i < disciplinas.length; i++) {

    auxd = disciplinas[i].split(" - ")
    row = [auxd[0],auxd[1],curso[i],hor[i],cargahor[i],profs[Atrib[i]]]        
    data.push(row.join(","));     
  }

  downloadCSVFile(data.join("\n"), filename);
}

function downloadCSVFile(csv, filename) {
  var csv_file, download_link;

  csv_file = new Blob([csv], {type: "text/csv"});
  download_link = document.createElement("a");
  download_link.download = filename;
  download_link.href = window.URL.createObjectURL(csv_file);
  download_link.style.display = "none";
  document.body.appendChild(download_link);
  download_link.click();
}

document.getElementById("download").addEventListener("click", function () {
  var html = document.querySelector("table").outerHTML;
  ArrToCSV(disciplinas, curso, hor, cargahor, profs, Atrib, "atribuidas.csv")
});

function criahorariotbl(dados){
  var haha = document.getElementById('tblhor');
  if(!(haha===null)){
    haha.parentNode.removeChild(haha)
  }
  var tabela = document.createElement('table');
  tabela.id = 'tblhor';
  var cntd = 0;
  var tcorpo = document.createElement('tbody');
  dados.forEach(function(linha){
    var lin = document.createElement('tr');
    linha.forEach(function(celula){
      var celu = document.createElement('td');
      celu.id = 'cl'+cntd;
      cntd = cntd+1 
      celu.appendChild(document.createTextNode(celula));
      lin.appendChild(celu);
    });
    tcorpo.appendChild(lin);
  });
  tabela.appendChild(tcorpo);
  var tbl = document.getElementById("horario");
  tbl.appendChild(tabela)
};

function selecao(opcoes,iddis){
  for(var i=0;i<opcoes.length;i++){
    var InSel = document.createElement("option");
    InSel.value = iddis[i];
    InSel.innerText = opcoes[i];
    InSel.id = "disopc"+iddis[i];
    var element = document.getElementById("MeuSel")
    element.appendChild(InSel)
  }
};

function constroecheck(vt){
  vt.forEach((atb,i) => {
    var  MeuDiv = document.createElement("div");
     MeuDiv.classList.add("mchb")
     MeuDiv.id = "mchb-"+i
    var MeuLab = document.createElement("label");
    var InCre = document.createElement("input");
    InCre.type = "checkbox";
    InCre.name="atribprof";
    InCre.id = "escprf"+i;
    InCre.checked = true;
    InCre.value = atb;
    MeuLab.id = "atbL";
    MeuLab.setAttribute("for","escprf"+i);
    MeuLab.innerText = '\u00a0'+atb;
    MeuDiv.appendChild(InCre);
    MeuDiv.appendChild(MeuLab);
    var element = document.getElementById("disatbprf");
    element.appendChild(MeuDiv);
  });
};

function criartabela(x){
  var haha = document.getElementById('tbldisciplinas');
  if(!(haha===null)){
    haha.parentNode.removeChild(haha);
  };
  let dadosa = [];
  let dadosb = [];
  for(var i=0;i<x.length;i++){
    if (profs[x[i]]===undefined){
      dadosa.push([disciplinas[i],hor[i],'']);
    }
    else{
      dadosb.push([disciplinas[i],hor[i],profs[x[i]]]);
    }
  };
  if(btnclck){
    dados = dadosb;
  }else{
    dados=dadosa
  }
  var tabela = document.createElement('table');
  tabela.id = 'tbldisciplinas';
  var thea = document.createElement('tr');
  AuX = ["Disciplina",'Horário','Professor']
  for(var i =0;i<3;i++){
    var thx = document.createElement('th');
    thx.appendChild(document.createTextNode(AuX[i]));
    thea.appendChild(thx);
  }
  tabela.appendChild(thea)

  var tcorpo = document.createElement('tbody');
  dados.forEach(function(linha){
    var lin = document.createElement('tr');
    /*lin.id = */
    linha.forEach(function(celula){
      var celu = document.createElement('td');
      celu.appendChild(document.createTextNode(celula));
      lin.appendChild(celu);
    });
    tcorpo.appendChild(lin);
  });
  tabela.appendChild(tcorpo);
  var tbl = document.getElementById("tblatribuidas");
  tbl.appendChild(tabela);
};

function tabelacompleta(x){
  var haha = document.getElementById('tblcompleta1');
  if(!(haha===null)){
    haha.parentNode.removeChild(haha);
  };
  let dados = []
  for(var i=0;i<x.length;i++){
    if (profs[x[i]]===undefined){
      dados.push([disciplinas[i],curso[i],hor[i],cargahor[i],'']);
    }
    else{
      dados.push([disciplinas[i],curso[i],hor[i],cargahor[i],profs[x[i]]]);
    }
  };
  
  var tabela = document.createElement('table');
  tabela.id = 'tblcompleta1';
  var thea = document.createElement('tr');
  AuX = ["Disciplina",'Curso','Horário','Carga Horária','Professor']
  for(var i =0;i<AuX.length;i++){
    var thx = document.createElement('th');
    thx.appendChild(document.createTextNode(AuX[i]));
    thea.appendChild(thx);
  }
  tabela.appendChild(thea)

  var tcorpo = document.createElement('tbody');
  dados.forEach(function(linha){
    var lin = document.createElement('tr');
    /*lin.id = */
    linha.forEach(function(celula){
      var celu = document.createElement('td');
      celu.appendChild(document.createTextNode(celula));
      lin.appendChild(celu);
    });
    tcorpo.appendChild(lin);
  });
  tabela.appendChild(tcorpo);
  var tbl = document.getElementById("tblcompleta");
  tbl.appendChild(tabela);
  return tabela
};

function horario(dsc){
  var cntd = 0;
  for(var i=0;i<16;i++){
    for(var j=0;j<5;j++){
      try{
        cel = document.getElementById("cl"+cntd);
        cel.style.backgroundColor = 'white';
      }
      catch{

      }
      cntd = cntd+1;
  }
 }
  var  horuser = [];
  for(var i=0;i<dsc.length;i++){
    x = dsc[i];
    if(x.length>0){
      let y = x.split('/');
      for(var j=0;j<y.length;j++){
        dia = parseInt(y[j].slice(0,1));
        hora = parseInt(y[j].slice(1,3));
        dur = parseInt(y[j].slice(-1,));
        for(var k=0;k<dur;k++){
          horuser.push(MaHor[hora-7+k][dia-2])
        }
      }
    }
  }
  for(var i=0;i<horuser.length;i++){
    cel = document.getElementById("cl"+horuser[i]);
    if(horuser.filter(x=>x==horuser[i]).length>1){
      cel.style.backgroundColor = '#fe5757';
    }
    else{
      cel.style.backgroundColor = '#5588ff';
    }
  }
  return horuser
}
/* #####################################################################################
########################################################################################
########################################################################################*/
/*document.getElementById("desatribuir").style.display = "none";*/

const profs = ['Carlos Antônio Dornellas','Martinho da Costa Araújo','Geraldo Lúcio Diniz','Sérgio Antonio Wielewski','Vinicius Machado Pereira dos Santos','Luzia Aparecida Palaro','Gladys Denise Wielewski','Almir Cesar Ferreira Cavalcanti','José Roberto Damasceno da Silva','Demilson Benedito do Nascimento','Aparecida Augusta da Silva','Aldi Nestor de Souza','André Krindges','Rodolfo Sebastião E.Allan','Reinaldo de Marchi','João de Sousa','Frederico José Andries Lopes','Moiseis dos Santos Cecconello','Elaynne Xavier Souza Araújo','Leidy Diane Wolmuth','Anna Ligia Oenning Soares','Beatris Carila da Silva','Fernanda Palhares Maringolo Sekimura','Ruikson Sillas de Oliveira Nunes','Hector Flores Callisaya','Thais Silva do Nascimento','Djeison Benetti','Daniellla Porto','Pedro Manuel Sanchez Aguilar','Wanderson Tenório','Ana Fanny Benzi de Oliveira Bastos','Gustavo Henrique Petroli','Tatiana Ramos Pacioni','Diana Yovani Rodriguez Villena','Haline Xavier Souza Araujo','Katia Regina Fortes da Costa'];
const disciplinas = ['1 - Álgebra I', '2 - Álgebra Ii', '3 - Álgebra Linear I', '4 - Álgebra Linear Ii', '5 - Análise Combinatória', '6 - Análise Matemática I', '7 - Análise Matemática Ii', '8 - Calculo I', '9 - Calculo Ii', '10 - Cálculo Iii', '11 - Cálculo Numérico', '12 - Construções Geométricas', '13 - Didática P/O Ens. Da Matemática', '14 - Educação Matemática I', '15 - Educação Matemática Ii', '16 - Educação Matemática Iii', '17 - Equações Diferenciais', '18 - Estagio Supervisionado I', '19 - Estagio Supervisionado Ii', '20 - Estagio Supervisionado Iii', '21 - Geometria Euclidiana', '22 - Hist. E Fil. Da Matemática', '23 - Matemática Financeira', '24 - Números E Funções', '25 - Programação Linear', '26 - Tcc I', '27 - Tcc Ii', '28 - Tecnologia Para O Ens. Da Mat I', '29 - Tecnologia Para O Ens. Da Mat Ii', '30 - Teoria Elementar Dos Números', '31 - Variáveis Complexas', '32 - Vetores E Geometria Analítica', '33 - Matemática', '34 - Cálculo Para Arquitetura', '35 - Cálculo I', '36 - Introdução Ao Cálculo', '37 - Cálculo I  Turma Cc', '38 - Vetores E Geom. Analítica Turma Cc', '39 - Álgebra Linear Turma Cc', '40 - Cálculo I', '41 - Cálculo Ii', '42 - Cálculo Iii', '43 - Cálculo Iv', '44 - Vetores E Geometria Analítica', '45 - Introdução À Álgebra Linear', '46 - Geom. Analítica E Álgebra Linear', '47 - Cálculo Diferencial E Integral I', '48 - Cálculo Diferencial E Integral I', '49 - Cálculo Diferencial E Integral Ii', '50 - Cálculo Diferencial E Integral Iii', '51 - Geometria Analítica', '52 - Álgebra Linear', '53 - Cálculo Dif. E Int. I (Seriado Anual)', '54 - Cálculo Dif. E Int. Ii (Seriado Anual)', '55 - Geom.Anal.Alg.Lin (Seriado Anual) Turma I', '56 - Métodos  Numéricos (Seriado Anual)', '57 - Introdução À Álgebra Linear', '58 - Cálculo I', '59 - Cálculo Ii', '60 - Cálculo Iii', '61 - Vetores E Geometria Analítica B', '62 - Álgebra Linear I', '63 - Cálculo I', '64 - Cálculo Ii', '65 - Álgebra Linear I', '66 - Cálculo I', '67 - Cálculo Ii', '68 - Álgebra Linear Ii', '69 - Cálculo Iii', '70 - Equações Diferenciais', '71 - Introdução Ao Cálculo', '72 - Cálculo Diferencial E Integral I Turma J', '73 - Cálculo Diferencial E Integral Iii Turma J', '74 - Vetores E Geometria Analítica Turma J', '75 - Cálculo Diferencial E Integral I Turma K', '76 - Cálculo Diferencial E Integral Ii Turma K E J', '77 - Vetores E Geometria Analítica - Turma K', '78 - Algebra Linear', '79 - Introdução Ao Cálculo', '80 - Números E Funções', '81 - Matemática Discreta'];
const hor = ['31332/51332', '31332/51332', '31332/51332', '31532/51532', '31332/51332', '21332/41332', '21332/41332', '21332/41332/61332', '21332/41332/61332', '21332/41332/61332', '31532/51532', '31532', '31532/51532', '21532/41532/61532', '21804/51532', '21802/31802/51802', '21332/41332', '21532/41532/51802', '21532/61334', '31532/61334', '31332/51332', '31332/51332', '31802/51802', '21332/41332/61332', '21532/41532', '41532', '51532', '31332/51332', '31532/51532', '31532/51532', '31332/51332', '21532/41532/61532', '20932/41332/50932', '31804', '20932/50932', '31804', '21332/41332/61332', '21532/41532/61532', '21902/41532', '20732/40932', '20732/40932', '20732/40932', '50732/60932', '20932/50732', '20932/40732', '61334', '31332/50932', '32002/51802', '22002/61802', '32002/51802', '20732/40932', '31332/42002', '20732/50732/60732', '31332/61332', '20932/40732', '40732', '51904', '41904/62102', '41904/62102', '41904/62102', '51904/61902', '20932/50932', '21332/31332/51332', '20732/40932/60732', '20932/50732', '20732/40932/60732', '20732/40932/60732', '20932/50732', '20732/40932/60732', '40932/60732', '40734', '31832/51832', '22032/31832', '41832/61332', '31832/51832', '31834', '31532/51532', '61904', '31332/41332', '60734', '61304']
const curso = ['Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática+Computação (Ava Separado)', 'Matemática+Computação (Ava Separado)', 'Matemática+Fis. Bach. (Ava Separado)', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Matemática', 'Agronomia', 'Arquitetura', 'Biologia', 'Ciências E Tec. De Alimentos', 'Computação', 'Computação', 'Computação', 'Eng. Elétrica', 'Eng. Elétrica', 'Eng. Elétrica', 'Eng. Elétrica', 'Eng. Elétrica', 'Eng. Elétrica', 'Eng. Florestal', 'Eng. Florestal', 'Eng. Sanitária', 'Eng. Sanitária', 'Eng. Sanitária', 'Eng. Sanitária', 'Eng. Sanitária', 'Eng.Civil', 'Eng.Civil', 'Eng.Civil', 'Eng.Civil', 'Estatistica', 'Estatística', 'Estatística', 'Estatística', 'Estatística', 'Física Bach', 'Física Bach', 'Física Bach', 'Física Lic', 'Física Lic', 'Física Lic', 'Física Lic+Bach (Ava Separado)', 'Física Lic+Bach (Ava Separado)', 'Física Lic+Bach (Ava Separado)', 'Geologia', 'Química - Bach', 'Química - Bach', 'Química - Bach', 'Química - Lic', 'Química - Lic E Bach (Ava Separado)', 'Química - Lic', 'Sist. De Informação', 'Zootecnia', 'Profmat', 'Profmat']
const cargahor = ['64', '64', '64', '64', '64', '64', '64', '96', '96', '96', '64', '32', '64', '96', '96', '96', '64', '96', '96', '96', '64', '64', '64', '96', '64', '32', '32', '64', '64', '64', '64', '96', '96', '60', '64', '64', '90', '90', '60', '64', '64', '64', '64', '64', '64', '64', '64', '60', '60', '60', '60', '60', '90', '60', '60', '30', '64', '96', '96', '96', '96', '64', '96', '96', '64', '96', '96', '64', '96', '64', '64', '64', '64', '64', '64', '64', '64', '60', '64', '64', '64']
var Atrib = [] /*posicao indica disc, valor indica prof*/
var PrfAtb =[] /*posicao indica prof, valor indica discs*/
var IdDis = [];
for (var i=0; i<profs.length;i++){
  PrfAtb[i]=[]
}
for (var i=0; i<disciplinas.length;i++){
  Atrib[i] = null
  IdDis[i] = i;
}

/*Atrib[79] = 14
Atrib[80] = 25
PrfAtb[14] = [79]
PrfAtb[25] = [80]*/
/*###### Constroe a lista inicial de disciplinas #####*/
selecao(disciplinas,IdDis)
var btnclck = false
criartabela(Atrib)
var btnclck = true

/*################*/
var MaHor = [];
let cntd = 0;
var mtx = [];
for(var i=0;i<16;i++){
  auxma = [];
  auxmt = [];
  for(var j=0;j<5;j++){
    auxma.push(cntd)
    auxmt.push(null)
    cntd = cntd+1;
  }
  MaHor.push(auxma)
  mtx.push(auxmt)
}
/*criahorariotbl(mtx)*/

/*####### constroe a lista inicial de professores #########*/
profs.forEach((prval, i) => {
  var MeuDiv = document.createElement("div");
  MeuDiv.classList.add("mform")
  var InCre = document.createElement("input");
  var MeuLab = document.createElement("label");
  InCre.type = "radio";
  InCre.name="listprof";
  InCre.id = "prf"+i;
  InCre.value = prval;
  MeuLab.setAttribute("for","prf"+i);
  MeuLab.innerText = '\u00a0' +prval;
  MeuDiv.appendChild(InCre);
  MeuDiv.appendChild(MeuLab);
  var element = document.getElementById("MeuGrupo");
  element.appendChild(MeuDiv);
});

/*####### ao clicar em atribuir #########*/
$("#atribuir").click(function(){
  cnd = !($("option:selected")[0].value==="-1");
  console.log(cnd)
  if (cnd){ 
    dsc = parseInt($("option:selected")[0].value)
    prfa = profs.indexOf($("input:checked")[0].value);
    Atrib[dsc] = prfa;
    PrfAtb[prfa].push(dsc);
     haha = document.getElementById("disopc"+dsc);
     haha.parentNode.removeChild(haha);

     haha = document.getElementById("atbL");
     while (!(haha===null)){
      haha = haha.parentNode
      haha.parentNode.removeChild(haha);
      haha = document.getElementById("atbL");
     }
     vt = [];
     horprf = [];
     for(var i=0;i<PrfAtb[prfa].length;i++){
      vt.push(disciplinas[PrfAtb[prfa][i]]);
      horprf.push(hor[PrfAtb[prfa][i]])
    }
    constroecheck(vt)
    xxxh = horario(horprf)
    criartabela(Atrib)
    tabelacompleta(Atrib)
  }
})

$("input").on('change', function(){
  haha = document.getElementById("atbL");
  while (!(haha===null)){
    haha = haha.parentNode
    haha.parentNode.removeChild(haha);
    haha = document.getElementById("atbL");
  }
  if (!($("input:checked")[0] ===undefined)){
    prfa = profs.indexOf($("input:checked")[0].value)
    vt = []; 
    horprf = [];
    for(var i=0;i<PrfAtb[prfa].length;i++){
      vt.push(disciplinas[PrfAtb[prfa][i]])
      horprf.push(hor[IdDis[PrfAtb[prfa][i]]])
    } 
    constroecheck(vt)
    horario(horprf)
  }
})

$('body').on('change', 'input[type=checkbox]',function (e) {
  let xx = $("input:checkbox");
  let vt = [];
  var horprf = [];
  for(let i=0;i<xx.length;i++){
    if(xx[i].checked){
      vt.push(xx[i].value)
      horprf.push(hor[IdDis[i]])
    }
    else{
      let idx = disciplinas.indexOf(xx[i].value);
      idp = Atrib[idx];
      Atrib[idx] = null;
      auxat = PrfAtb[idp];
      let idxx = auxat.indexOf(idx)
      auxat.splice(idxx,1)
      PrfAtb[idp] = auxat
    }
  }
  haha = document.getElementById("atbL")
  while (!(haha===null)){
    haha = haha.parentNode
    haha.parentNode.removeChild(haha);
    haha = document.getElementById("atbL");
  }
  horario(horprf)
  constroecheck(vt)
  let disaux = []
  let iddisaux = []
  let cnt = 0
  for(var i=0;i<disciplinas.length;i++){
    if (Atrib[i]===null){
      disaux[cnt] = disciplinas[i];
      iddisaux[cnt] = IdDis[i];
      cnt = cnt+1;
    }
  }
  let xxa = $("option");
  for(var i=1;i<xxa.length;i++){
    haha = document.getElementById(xxa[i].id)
    haha.parentNode.removeChild(haha);
  }
  selecao(disaux,iddisaux)
  criartabela(Atrib)
  tabelacompleta(Atrib)
})

/*horprf = [];
    for(var i=0;i<PrfAtb[prfa].length;i++){
      vt.push(disciplinas[PrfAtb[prfa][i]])
      horprf.push(hor[IdDis[i]])
    }*/
$("select").on('change',function(){
  horprf = [];
  var dcpesc = disciplinas.indexOf($("option:selected")[0].innerText)
  if (!(dcpesc===undefined)){
    horprf.push(hor[dcpesc])
  }
  try{
    prfa = profs.indexOf($("input:checked")[0].value)
    for(var i=0;i<PrfAtb[prfa].length;i++){
      horprf.push(hor[PrfAtb[prfa][i]])
    }
  }
  catch{
  }
  horario(horprf)
  })

function atbbtn(){
  btnclck = true
  criartabela(Atrib)
  xx = document.getElementById("atribtblcnt").style.background = "#b2b2b2"
  xx = document.getElementById("natribtblcnt").style.background = "#e7e7e7"
}
function natbbtn(){
  btnclck = false
  criartabela(Atrib)
  xx = document.getElementById("natribtblcnt").style.background = "#b2b2b2"
  xx = document.getElementById("atribtblcnt").style.background = "#e7e7e7"
}
var tblcp = tabelacompleta(Atrib)
