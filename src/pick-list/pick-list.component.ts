import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DocumentoService } from '../services/documento.service';
import { Documento } from './documento';
import { ProcessoService } from './../services/processo.service';

/**
 * Service class that represents PickListComponent.
 * @author odair.pereira@castgroup.com.br
 */
@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html'
})
export class PickListComponent implements OnInit {

  @Input() showButtons: boolean;
  @Input() isEdit: boolean;
  @Output() carregouDocumentos = new EventEmitter<boolean>();
  documentos: Documento[] = [];
  selectDocumentos: any[] = [];

  documentosObrigatorios: Documento[] = [];
  selectdDocumentosObrigatorios: any[] = [];

  documentosOpcionais: Documento[] = [];
  selectdDocumentosOpcionais: any[] = [];

  constructor(private processoService: ProcessoService,
    private documentoService: DocumentoService) {
  }

  ngOnInit() {
    this.getDocumentos();
  }

  /**
  * Get Documentos
  */
  public getDocumentos() {
    this.documentoService.getDocumentos().subscribe(data => {
      this.documentos = data;
      this.carregouDocumentos.emit(true);
    });
  }

  public addCampoObrigatorio(event) {
    for (var i = 0; i < this.selectDocumentos.length; i++) {
      const doc = this.getDocumentoByName(this.selectDocumentos[i]);
      doc.cor = 'green';
      this.documentosObrigatorios.push(doc);
      for (var j = 0; j < this.documentos.length; j++) {
        if (this.documentos[j].nome == doc.nome) {
          this.documentos.splice(j, 1);
        }
      }
    }
    this.selectDocumentos = [];
  }

  public removeCampoObrigatorio(event) {
    for (var i = 0; i < this.selectdDocumentosObrigatorios.length; i++) {
      const doc = this.getDocumentoByName(this.selectdDocumentosObrigatorios[i]);
      doc.cor = 'red';
      this.documentos.push(doc);
      for (var j = 0; j < this.documentosObrigatorios.length; j++) {
        if (this.documentosObrigatorios[j].nome == doc.nome) {
          this.documentosObrigatorios.splice(j, 1);
        }
      }
    }
    this.selectdDocumentosObrigatorios = [];
  }

  public addCampoOpcional(event) {
    for (var i = 0; i < this.selectDocumentos.length; i++) {
      const doc = this.getDocumentoByName(this.selectDocumentos[i]);
      doc.cor = 'green';
      this.documentosOpcionais.push(doc);
      for (var j = 0; j < this.documentos.length; j++) {
        if (this.documentos[j].nome === doc.nome) {
          this.documentos.splice(j, 1);
        }
      }
    }
    this.selectDocumentos = [];
  }

  public removeCampoOpcional(event) {
    for (var i = 0; i < this.selectdDocumentosOpcionais.length; i++) {
      const doc = this.getDocumentoByName(this.selectdDocumentosOpcionais[i]);
      doc.cor = 'red';
      this.documentos.push(doc);
      for (var j = 0; j < this.documentosOpcionais.length; j++) {
        if (this.documentosOpcionais[j].nome === doc.nome) {
          this.documentosOpcionais.splice(j, 1);
        }
      }
    }
    this.selectdDocumentosOpcionais = [];
  }

  public getAllSelectedDocumentos() {
    return [... this.documentosObrigatorios, ... this.documentosOpcionais];
  }

  private getDocumentoByName(nome) {
    let doc = this.documentos.find(doc => doc.nome === nome);
    if (!doc) {
      doc = this.documentosObrigatorios.find(doc => doc.nome === nome)
    }
    if (!doc) {
      doc = this.documentosOpcionais.find(doc => doc.nome === nome)
    }
    return doc;
  }
}
