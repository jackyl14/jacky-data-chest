import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Chart } from 'chart.js';
import * as moment from 'moment';

import { AccountDetailService } from '../../services/account-detail.service';
import { EnergyDaily, EnergySummary } from '../../types';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  providers: [AccountDetailService]
})
export class AccountDetailsComponent implements OnInit, AfterViewInit {

  @ViewChild('myBarChart') canvasRef: ElementRef;
  @ViewChild('myChartAxis') canvas2Ref: ElementRef;

  public summary: EnergySummary;
  public dailies: EnergyDaily[];
  public previousMonthYear: string;

  private accountId: number;

  constructor(
    private AccountDetailService: AccountDetailService,
    private ActivatedRoute: ActivatedRoute
  ) {
    this.summary = null;
    this.dailies = null;
  }

  public ngOnInit(): void {
    this.accountId = this.ActivatedRoute.snapshot.params.accountId;
    this.AccountDetailService.getSummary(this.accountId).subscribe(summary => {
      this.summary = summary;
    });
  }

  public ngAfterViewInit(): void {
    this.AccountDetailService.getDailies(this.accountId).subscribe(dailies => {
      this.dailies = dailies.daily_energy_usage;
      this.setupBarGraph(this.dailies);
    });
  }

  public setupBarGraph(data: EnergyDaily[]): void {
    let keys = [];
    let values = [];
    data.forEach(object => {
      const key = Object.keys(object)[0];
      keys.push(key.split('/')[1]);
      values.push(object[key]);
    });

    let day = moment(Object.keys(data[0])[0], 'MM/DD/YYYY');
    this.previousMonthYear = day.format('MMMM YYYY');

    let chart = new Chart(this.canvasRef.nativeElement.getContext('2d'), {
      type: 'bar',
      data: {
        labels: keys,
        datasets: [{
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: values,
        }]
      },

      // Configuration options go here
      options: {
        animation: {
          duration: 1,
          onComplete: (animation) => {
            let ctx = animation.chart.ctx;
            let dataset = animation.chart.controller.getDatasetMeta(0);

            ctx.font = Chart.helpers.fontString(
              Chart.defaults.global.defaultFontSize,
              Chart.defaults.global.defaultFontStyle,
              Chart.defaults.global.defaultFontFamily
            );
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            // only one
            dataset.data.forEach((bar, index) => {
              ctx.fillText(values[index], bar._model.x, bar._model.y - 5);
            });
          }
        },
        hover: { animationDuration: 0 },
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
          }
        },
        legend: { display: false },
        responsiveness: false,
        scales: {
          yAxes: [{ gridLines: { drawBorder: false, display: true }, ticks: { display: false, beginAtZero: true} }],
          xAxes: [{ gridLines: { display: false }, ticks: { display: true}}]
        },
        tooltips: { enabled: false }
      }
    });
  }


}
