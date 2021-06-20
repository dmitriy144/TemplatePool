import {
  ComponentFactoryResolver,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Type,
} from "@angular/core";

export const TEMPLATE_POOL_REPOSITORY = new InjectionToken(
  "template pool repository class"
);

@Injectable()
export class TemplatePoolService<T> {
  protected templatePool: T;

  get templates() {
    return this.templatePool;
  }

  constructor(
    @Inject(TEMPLATE_POOL_REPOSITORY)
    templatePoolComponent: Type<T>,
    protected injector: Injector,
    protected componentFactoryResolver: ComponentFactoryResolver
  ) {
    const poolFactory = this.componentFactoryResolver.resolveComponentFactory(
      templatePoolComponent
    );
    const componentRef = poolFactory.create(this.injector);
    componentRef.changeDetectorRef.detectChanges();
    this.templatePool = componentRef.instance;
  }
}
