import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { StyleParams, Voting } from './types';

@Component({
  selector: 'ng-voting',
  templateUrl: "ng-voting.component.html",
  styleUrls: ['ng-voting.component.scss']
})
export class NgVotingComponent implements OnChanges, AfterViewInit {
    defaultStyleParams: StyleParams = {
        backgroundColor: '#ffffff',
        borderColor: '#d3d3d3',
        margin: '1rem',
        hoverColor: '#ebebeb',
        scaleColor: '#9797dc',
        fontSize: '1.5rem'
    }
    @Input() styleParams: StyleParams = {};
    @Output() selected = new EventEmitter<string>()
    @Input() data!: Voting;
    @Input() isLoading = false;
    @Input() showScale = true
 
    constructor(private renderer: Renderer2, private el: ElementRef) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['data']) {
            this.showPercentage()
        }
    }

    ngAfterViewInit(): void {
        this.applyStyles()
    }

    voted(value: string) {
        this.selected.emit(value);
        this.showPercentage() 
    }

    showPercentage() {
        if(this.showScale) {
            const optionElements = this.el.nativeElement.querySelectorAll('.ng-voting-options-option') as HTMLElement[]
            
            const totalVotesCount = this.data.options.reduce((a, c) =>  {
                a += c.votesCount;
                return a;
            }, 0)

            optionElements.forEach((optionElement) => {
                const elementId = optionElement.id
                const width = (this.data.options[parseInt(elementId)].votesCount / totalVotesCount * 100).toFixed(0);
                
                let scaleElement = optionElement.querySelector('.ng-voting-options-option-scale') 
                if(!scaleElement) {
                    scaleElement = this.renderer.createElement('div') as HTMLElement;
                    scaleElement.id = `${elementId}after`
                    this.renderer.addClass(scaleElement, 'ng-voting-options-option-scale'); 
                    this.renderer.setStyle(scaleElement, 'width', 0);
                    this.renderer.appendChild(optionElement, scaleElement);
                } 
                setTimeout(() => {
                    this.renderer.setStyle(scaleElement, 'width', `${width}%`);
                }) 
            });  
        }
    }

    applyStyles() {
        const style = {...this.defaultStyleParams, ...this.styleParams}
        document.documentElement.style.setProperty('--ng-voting-background-color', style.backgroundColor as string)
        document.documentElement.style.setProperty('--ng-voting-border-color', style.borderColor as string)
        document.documentElement.style.setProperty('--ng-voting-margin', style.margin as string)
        document.documentElement.style.setProperty('--ng-voting-scale-color', style.scaleColor as string)
        document.documentElement.style.setProperty('--ng-voting-font-size', style.fontSize as string)
        document.documentElement.style.setProperty('--ng-voting-hover-color', style.hoverColor as string)

        const optionsFontSize = parseFloat(style.fontSize?.replace(/[^0-9.]/g, '') as string) * .75 + 'rem' ;
        document.documentElement.style.setProperty('--ng-voting-options-font-size', optionsFontSize)
    }

}
