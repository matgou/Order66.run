import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Order66SharedModule } from '../../shared';

import {
    RuleTypeService,
    RuleTypePopupService,
    RuleTypeComponent,
    RuleTypeDetailComponent,
    RuleTypeDialogComponent,
    RuleTypePopupComponent,
    RuleTypeDeletePopupComponent,
    RuleTypeDeleteDialogComponent,
    ruleTypeRoute,
    ruleTypePopupRoute,
} from './';

let ENTITY_STATES = [
    ...ruleTypeRoute,
    ...ruleTypePopupRoute,
];

@NgModule({
    imports: [
        Order66SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        RuleTypeComponent,
        RuleTypeDetailComponent,
        RuleTypeDialogComponent,
        RuleTypeDeleteDialogComponent,
        RuleTypePopupComponent,
        RuleTypeDeletePopupComponent,
    ],
    entryComponents: [
        RuleTypeComponent,
        RuleTypeDialogComponent,
        RuleTypePopupComponent,
        RuleTypeDeleteDialogComponent,
        RuleTypeDeletePopupComponent,
    ],
    providers: [
        RuleTypeService,
        RuleTypePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Order66RuleTypeModule {}
