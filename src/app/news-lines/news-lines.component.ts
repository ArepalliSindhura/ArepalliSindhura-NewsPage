import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-lines',
  templateUrl: './news-lines.component.html',
  styleUrls: ['./news-lines.component.css']
})
export class NewsLinesComponent implements OnInit {
  news : any;
  constructor() {
   }

  ngOnInit() {
    this.news = [{newsLines : "India's 10 Covid-19 hotspots: An overview", imageSrc : "India's 10 covid hotspots", matter : "India is focusing its attention on 10 hotspots across the country in its effort to control the coronavirus pandemic, which has so far infected more than 1,600 people and claimed 38 lives. There are two Covid-19 hotspots each in Uttar Pradesh, Delhi, Kerala and Maharashtra and one each in Gujarat and Rajasthan", date : "01/04/2020"},
    {newsLines : "Yogi Adityanath orders NSA against Jamaat members for alleged misbehaviour", imageSrc : "yogi adityanath orders NSA", matter : "Uttar Pradesh government has taken a serious view of the reports alleging some Tablighi Jamaat members misbehaved with the nurses at a Ghaziabad hospital and ordered booking of the offenders under the stringent National Security Act on Friday. Chief Minister Yogi Adityanath is reported to have told officials to not allow a repeat of Indore-like incident in the state.", date : "03/04/2020"},
    {newsLines : "Modi's Nine-Minute Blackout Call on Sunday Will Keep India's Power Industry on its Toes", imageSrc : "Modi's nine minutes blackout", matter : "New Delhi: Prime Minister Narendra Modi has appealed to the nation to switch off all lights in homes and light candles, diyas, torch lights or phone flash lights for nine minutes on April 5 to ‘feel the collective battle that we are all fighting’.", date : "02/04/2020"},
    {newsLines : "Covid-19 statewise tally: Tamil Nadu, Delhi outnumber coronavirus cases in Kerala", imageSrc : "covid-19 statewise tally", matter : "India on Saturday entered the eleventh of the 3-week coronavirus lockdown. On Saturday, the health ministry updated the number of Covid-19 cases in the country to 2,902 including 2,650 active cases, 183 patients who have recovered and 68 fatalities.", date : "03/04/2020"}];
}
}
