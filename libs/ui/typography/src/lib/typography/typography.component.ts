import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { H2Component, H3Component, H4Component, H5Component, Size } from './dinamic.component';

type Text =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'subtitle1'
  | 'subtitle2'
  | 'normal';

@Component({
  standalone: true,
  styleUrls: ['./typography.component.css'],
  template: `<h1 class="typography {{ size }}"><ng-content /></h1>`,
})
export class H1Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  styleUrls: ['./typography.component.css'],
  template: `<span class="typography {{ size }}"><ng-content /></span>`,
})
export class SpanComponent {
  @Input() size!: Size;
}

@Component({
  selector: 'dsc-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.css'
})
export class TypographyComponent implements OnInit {
  @Input() variant: Text = 'normal';

  @Input() size!: Size;

  @ViewChild('template', { static: true }) template!: TemplateRef<unknown>;

  component: any = SpanComponent;

  dynamicComponentContent!: any[][];

  private componentsMap = {
    title1: H1Component,
    title2: H2Component,
    title3: H3Component,
    subtitle1: H4Component,
    subtitle2: H5Component,
    normal: SpanComponent
  } satisfies { [key in Text]: any };

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.component = this.componentsMap[this.variant];
    
    const templateContent = this.viewContainerRef.createEmbeddedView(
      this.template
    ).rootNodes;

    this.dynamicComponentContent = [templateContent];
  }
}
