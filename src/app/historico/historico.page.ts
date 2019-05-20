import { Component, OnInit } from '@angular/core';
import { Historico } from '../shared/historico.model';
import { ServicoService } from '../servico.service';


@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
  providers: [ServicoService]
})
export class HistoricoPage implements OnInit {

  
public historicos2: Array<Historico> = [
  {
    "id": 1,
    "entrada": "08:00",
    "idaAlmoco": "12:10",
    "voltaAlmoco": "13:11",
    "saida": "18:00",
    "diaSemana": "06/05/2019"
  },
  {
    "id": 2,
    "entrada": "08:10",
    "idaAlmoco": "11:52",
    "voltaAlmoco": "12:52",
    "saida": "17:40",
    "diaSemana": "07/05/2019"
  },
  {
    "id": 3,
    "entrada": "07:32",
    "idaAlmoco": "12:15",
    "voltaAlmoco": "13:15",
    "saida": "17:33",
    "diaSemana": "08/05/2019"
  },
  {
    "id": 4,
    "entrada": "08:40",
    "idaAlmoco": "12:20",
    "voltaAlmoco": "13:19",
    "saida": "18:38",
    "diaSemana": "09/05/2019"
  },
  {
    "id": 5,
    "entrada": "08:09",
    "idaAlmoco": "12:36",
    "voltaAlmoco": "13:35",
    "saida": "18:09",
    "diaSemana": "10/05/2019"
  },
  {
    "id": 6,
    "entrada": "08:27",
    "idaAlmoco": "12:40",
    "voltaAlmoco": "13:41",
    "saida": "18:27",
    "diaSemana": "11/05/2019"
  }	
]

  public historicos: Historico[]
  public historico: Historico
  public alerta: boolean = false
  public testo: string = ''

  constructor(private servicoService: ServicoService) { }

  ngOnInit() {

  }

  dataHistorico(): any {

    var opt = document.getElementById("inputGroupSelect").getElementsByTagName("option");

    this.historicos2.forEach(historico => {

      // console.log(opt[this.posicao])
      for (let index = 0; index < opt.length; index++) {
        this.testo = opt[index].text;
        if (opt[index].selected && historico.diaSemana == this.testo) {
          this.historico = historico
        } else {
          console.log("Não é: " + this.testo)
        }
      }
    });
  }

  duvida(): any {
    if (this.alerta) {
      return this.alerta = false
    } else {
      return this.alerta = true
    }
  }

//=============== Código para usar Json-Server ========================================



// dataHistorico(): any {

//   var opt = document.getElementById("inputGroupSelect01").getElementsByTagName("option");

//   this.historicos.forEach(historico => {

//     // console.log(opt[this.posicao])
//     for (let index = 0; index < opt.length; index++) {
//       this.testo = opt[index].text;
//       if (opt[index].selected && historico.diaSemana == this.testo) {
//         this.historico = historico
//       } else {
//         console.log("Não é: " + this.testo)
//       }
//     }
//   });
// }









}
