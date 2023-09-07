import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { defaultStyleParams } from './constants';
import { StyleParams, Voting } from './types';

@Component({
  selector: 'ng-voting',
  templateUrl: "ng-voting.component.html",
  styleUrls: ['ng-voting.component.scss']
})
export class NgVotingComponent implements OnInit, AfterViewInit {
    _data!: Voting;
    _showScale = true;
    @Output() selected = new EventEmitter<string>()
    @Input() selectedOptionValue = ""
    @Input() styleParams: StyleParams = {};
    @Input() isLoading = false;
    @Input() showUsers = true;
    @Input() disable = true;
    @Input() 
        get showScale(): boolean {
            return this._showScale
        }
        set showScale(show: boolean) {
            this._showScale = show
            if(this._showScale) {
                setTimeout(() => this.updateScales())
            }
        }
    @Input() 
        get data(): Voting { return this._data; }
        set data(data: Voting) {
            this._data = data;
            this.updateScales()
        }
    
    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngOnInit(): void {
        this.applyStyles()
    }

    ngAfterViewInit(): void {
        this.updateScales()
    }

    voted(value: string) {
        if(!this.disable) {
            this.selected.emit(value);
        }    
    }

    updateScales() {
        const optionElements = this.el.nativeElement.querySelectorAll('.ng-voting-options-option') as HTMLElement[]
        
        const totalVotesCount = this.data.options.reduce((a, c) =>  {
            a += c.votesCount;
            return a;
        }, 0)

        optionElements.forEach((optionElement) => {
            const elementId = optionElement.id
            const width = (this.data.options[parseInt(elementId)].votesCount / totalVotesCount * 100).toFixed(0);
            let scaleElement = optionElement.querySelector('.ng-voting-options-option-scale') 
            setTimeout(() => {
                this.renderer.setStyle(scaleElement, 'width', `${width}%`);
            }) 
        });  
    }

    applyStyles() {
        const style = { ...defaultStyleParams, ...this.styleParams}
        document.documentElement.style.setProperty('--ng-voting-border-color', style.borderColor as string)
        document.documentElement.style.setProperty('--ng-voting-margin', style.margin as string)
        document.documentElement.style.setProperty('--ng-voting-scale-color', style.scaleColor as string)
        document.documentElement.style.setProperty('--ng-voting-font-size', style.fontSize as string)
        document.documentElement.style.setProperty('--ng-voting-hover-color', style.hoverColor as string)
        document.documentElement.style.setProperty('--ng-voting-topic-bgColor', style.topicBackgroundColor as string)
        document.documentElement.style.setProperty('--ng-voting-topic-fontColor', style.topicFontColor as string)
        document.documentElement.style.setProperty('--ng-voting-options-bgColor', style.optionsBackgroundColor as string)
        document.documentElement.style.setProperty('--ng-voting-options-fontColor', style.optionsFontColor as string)    

        const smallFontSize = parseFloat(style.fontSize?.replace(/[^0-9.]/g, '') as string) * .75 + 'rem';
        const smallestFontSize = parseFloat(style.fontSize?.replace(/[^0-9.]/g, '') as string) * .5 + 'rem';
        document.documentElement.style.setProperty('--ng-voting-font-size-small', smallFontSize)
        document.documentElement.style.setProperty('--ng-voting-font-size-smallest', smallestFontSize)
    }

}
