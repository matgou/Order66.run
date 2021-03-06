import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Order66SharedModule } from '../../shared';
import { Order66AdminModule } from '../../admin/admin.module';

import {
    RuleReportService,
    RuleReportPopupService,
    RuleReportComponent,
    RuleReportDetailComponent,
    RuleReportDialogComponent,
    RuleReportPopupComponent,
    RuleReportDeletePopupComponent,
    RuleReportDeleteDialogComponent,
    ruleReportRoute,
    ruleReportPopupRoute,
    ToClassPipe,
    JsonToHTMLPipe,
} from './';

let ENTITY_STATES = [
    ...ruleReportRoute,
    ...ruleReportPopupRoute,
];

@NgModule({
    imports: [
        Order66SharedModule,
        Order66AdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        RuleReportComponent,
        RuleReportDetailComponent,
        RuleReportDialogComponent,
        ToClassPipe,
        JsonToHTMLPipe,
        RuleReportDeleteDialogComponent,
        RuleReportPopupComponent,
        RuleReportDeletePopupComponent,
    ],
    entryComponents: [
        RuleReportComponent,
        RuleReportDialogComponent,
        RuleReportPopupComponent,
        RuleReportDeleteDialogComponent,
        RuleReportDeletePopupComponent,
    ],
    providers: [
        RuleReportService,
        RuleReportPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Order66RuleReportModule {}
