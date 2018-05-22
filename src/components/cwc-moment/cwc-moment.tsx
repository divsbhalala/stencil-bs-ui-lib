import { Component, Prop, State } from '@stencil/core';
import { Duration, DurationInputArg2 } from 'moment';
import moment from 'moment';
import 'moment/min/locales.min';

@Component({
    tag: 'cwc-moment'
})
export class CwcMoment {
    @Prop() date: string;
    @Prop() duration: string;
    @Prop() unit: DurationInputArg2 = 'seconds';
    @Prop() separator: string = ':';
    @Prop() format: string;
    @Prop() diff: boolean;
    @Prop() humanize: boolean;
    @Prop() lang = 'en';
    @Prop() calendarI18n = {
        en: {
            lastDay : '[Yesterday]',
            sameDay : '[Today]',
            nextDay : '[Tomorrow]',
            lastWeek : '[last] dddd',
            nextWeek : 'dddd',
            sameElse : 'L',
            spacer: 'at'
        },
        de: {
            lastDay: '[Gestern]',
            sameDay: '[Heute]',
            nextDay : '[Morgen]',
            lastWeek : '[letzte] dddd',
            nextWeek : 'dddd',
            sameElse : 'L',
            spacer: 'um'
        }
    }

    @State() momentNow: string;
    @State() durationFormatted: string;


    componentDidLoad() {        
        
        moment.locale(this.lang, {
            longDateFormat : {
                LT : 'HH:mm',
                LTS : 'HH:mm:ss',
                L : 'DD.MM.YYYY',
                LL : 'D MMMM YYYY',
                LLL : 'D MMMM YYYY HH:mm',
                LLLL : 'dddd D MMMM YYYY HH:mm'
            }
        });

        this.momentNow = null;

        if (this.duration) {
            const durationObj: Duration = moment.duration(Number(this.duration), this.unit);
            this.durationFormatted = this.padLead(durationObj.hours()) 
                + this.separator + this.padLead(durationObj.minutes())
                + this.separator + this.padLead(durationObj.seconds());
        } else {
            if (this.date && this.diff && this.humanize) {
                const oneMinutesBefore = moment().add(-1, 'minutes').format();
                const todayBegin = moment().hours(0).minute(0).seconds(0);
                const todayEnd = moment().hours(23).minute(59).seconds(59);
                const yesterdayBegin = moment().add(-1, 'day').hours(0).minute(0).seconds(0);
                const yesterdayEnd = moment().add(-1, 'day').hours(23).minute(59).seconds(59);

                const momentDate = moment(this.date);
                if (momentDate.isBetween(oneMinutesBefore, moment())) {
                    this.momentNow = 'a moment ago';
                } else if (momentDate.isBetween(todayBegin, todayEnd)) {
                    const calendarFormat = moment(this.date).calendar(null, this.calendarI18n[this.lang]);
                    this.momentNow = calendarFormat.split(' ')[0] + ` ${this.calendarI18n[this.lang].spacer} ` + momentDate.format("hh:mm a");
                } else if (momentDate.isBetween(yesterdayBegin, yesterdayEnd)) {
                    const calendarFormat = moment(this.date).calendar(null, this.calendarI18n[this.lang]);
                    this.momentNow = calendarFormat.split(' ')[0] + ` ${this.calendarI18n[this.lang].spacer} ` + momentDate.format("hh:mm a");
                } else {
                    this.momentNow = momentDate.fromNow();
                }
            } else if (!moment(this.date).isValid()) {
                this.momentNow = '-';
                console.log('momentNow:', this.momentNow);
            } else if (!this.format) {
                this.momentNow = moment(this.date).calendar();
            } else {
                this.momentNow = moment(this.date).format(this.format);
            }
        }
    }

    getFormattedString() {

        if (this.durationFormatted) {
            return this.durationFormatted;
        } else if (this.momentNow) {
            return this.momentNow;
        }
    }

    private padLead(target): string {
        let str = String(target);
        while (str.length < 2) {
            str = '0' + str;
        }
        return str;
    }

    render() {
        return (
            <div>
                {this.getFormattedString()}
            </div>
        )
    }
}
