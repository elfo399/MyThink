import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { WidgetDateComponent } from './components/widget-date/widget-date.component';
import { TextPostComponent } from './components/postIt/text-Post/text-Post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetCalendarComponent } from './components/widget-calendar/widget-calendar.component';
import { FormsModule } from '@angular/forms';
import { ButtonNewActivityComponent } from './components/button-new-activity/button-new-activity.component';
import { ClockComponent } from './components/clock/clock.component';
import { DrawPostComponent } from './components/postIt/draw-post/draw-post.component';
import { CalendarPostComponent } from './components/postIt/calendar-post/calendar-post.component';
import { BirthdayPostComponent } from './components/postIt/birthday-post/birthday-post.component';
import { CheckBoxPostComponent } from './components/postIt/check-box-post/check-box-post.component';
import { ImagePostComponent } from './components/postIt/image-post/image-post.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        WorkspaceComponent,
        WidgetDateComponent,
        WidgetCalendarComponent,
        ButtonNewActivityComponent,
        ClockComponent
    ],
    providers: [
        provideClientHydration(),
        DatePipe
    ],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        TextPostComponent,
        FormsModule,        
        DrawPostComponent,
        CalendarPostComponent,
        BirthdayPostComponent,
        CheckBoxPostComponent,
        ImagePostComponent,
        HttpClientModule
    ]
})

export class AppModule { }
