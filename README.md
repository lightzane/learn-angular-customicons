# learn-angular-customicons

Learning `@angular/material` custom SVG icons using `MatIconRegistry`

Live demo: https://lightzane.github.io/learn-angular-customicons

**app.component.ts**

```ts
export class AppComponent {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      "my-star",
      this.sanitizer.bypassSecurityTrustResourceUrl("assets/star.svg")
    );
  }
}
```

**app.component.html**

```html
<mat-icon svgIcon="my-star"></mat-icon>
```

**styles.scss**

```scss
.mat-primary path,
.mat-accent path,
.mat-warn path,
.dark path,
.dark .mat-primary path,
.dark .mat-accent path,
.dark .mat-warn path {
  fill: inherit !important;
}
```

## Reference

- https://material.angular.io/components/icon/examples
