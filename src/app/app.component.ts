import { Component,  ViewChild, ElementRef  } from '@angular/core';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements = ['block', 'text', 'form', 'table'];

  title = 'htmltopdf';
  

  @ViewChild('pagetoRender') pagetoRender: ElementRef;


  public downloadAsPDF() {

    const doc = new jsPDF();

    const pagetoRender = this.pagetoRender.nativeElement;

    var html = htmlToPdfmake(pagetoRender.innerHTML);

    const documentDefinition = { content: html };

    pdfMake.createPdf(documentDefinition).open(); 
  }

  onBtnAddElement(el: string): void {
    this.elements = [...this.elements, el];
  }
}
