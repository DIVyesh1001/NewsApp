import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';



export default class news extends Component {



  //   articles=[
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "Minneapolis Star Tribune"
  //         },
  //         "author": "Ben Goessling, Star Tribune",
  //         "title": "Vikings first-round draft updates, analysis - Star Tribune",
  //         "description": "Keep up with the latest news on the first round of the NFL draft with a focus on what’s happening with the Minnesota Vikings.",
  //         "url": "https://www.startribune.com/nfl-draft-minnesota-vikings-first-round-picks-trades-news/600361721/",
  //         "urlToImage": "https://arc.stimg.co/startribunemedia/SLQ23PMDEZGT7FCM4Z6GRV7NP4.JPG?h=630&w=1200&fit=crop&bg=999&crop=faces",
  //         "publishedAt": "2024-04-26T00:33:45Z",
  //         "content": "This is Ben Goessling's live report of the first round of the NFL draft from Vikings headquarters at TCO Performance Center in Eagan. Check back here often for updates on the Vikings' moves.\r\n. . .\r\n… [+5409 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "ChicagoBears.com"
  //         },
  //         "author": null,
  //         "title": "OFFICIAL - ChicagoBears.com",
  //         "description": "The Bears on Thursday, as expected, selected USC quarterback Caleb Williams with the No. 1 pick in the 2024 NFL Draft. Williams was widely considered the top prospect in a draft class loaded with talented quarterbacks.",
  //         "url": "https://www.chicagobears.com/news/caleb-williams-bears-quarterback-number-1-pick-2024-nfl-draft-usc",
  //         "urlToImage": "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/bears/ibupfybrumxmxkotq78c",
  //         "publishedAt": "2024-04-26T00:25:40Z",
  //         "content": "Before Williams' Pro Day March 20 in Los Angeles, he dined with a large Bears contingent that included Poles, assistant general manager Ian Cunningham, coach Matt Eberflus, offensive coordinator Shan… [+2364 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "MarketWatch"
  //         },
  //         "author": "Emily Bary",
  //         "title": "Microsoft earnings: Stock charges higher on strong Azure growth - MarketWatch",
  //         "description": "Microsoft reported fiscal third-quarter results after the close of trading Thursday. MarketWatch broke down the commentary and results.",
  //         "url": "https://www.marketwatch.com/livecoverage/microsoft-earnings-stock-q3-azure-copilot-office/card/the-margin-view-CwQ6flyxP51dqdQ7cMt0",
  //         "urlToImage": "https://images.mktw.net/im-873984/social",
  //         "publishedAt": "2024-04-26T00:25:00Z",
  //         "content": "Back to TopIntraday Data provided by FACTSET and subject to terms of use. Historical and current end-of-day data provided by FACTSET. All quotes are in local exchange time. Real-time last sale data f… [+136 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "nfl-news",
  //             "name": "NFL News"
  //         },
  //         "author": null,
  //         "title": "Eagles WR A.J. Brown agrees to terms on three-year, $96 million extension - NFL.com",
  //         "description": "Philadelphia Eagles wide receiver A.J. Brown has agreed to a three-year, $96 million extension, NFL Network Insider Ian Rapoport reported Thursday afternoon, per a source. He is under contract through 2029.",
  //         "url": "https://www.nfl.com/news/eagles-wr-a-j-brown-agrees-to-terms-on-three-year-96-million-extension",
  //         "urlToImage": "https://static.www.nfl.com/image/upload/t_editorial_landscape_12_desktop/league/fhjmstic8erhl0xefude",
  //         "publishedAt": "2024-04-25T23:50:00Z",
  //         "content": "Philadelphia can stop the hand-wringing: A.J. Brown is staying for the long haul.\r\nBrown and the Eagles have agreed on a three-year, $96 million extension, making Brown the highest-paid receiver in t… [+1540 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "CBS Sports"
  //         },
  //         "author": "",
  //         "title": "2024 NFL Draft bold predictions: Cowboys QB surprise, plus first-round ties QB record - CBS Sports",
  //         "description": "Here are the boldest bold predictions that you'll read about the NFL Draft this year",
  //         "url": "https://www.cbssports.com/nfl/draft/news/2024-nfl-draft-bold-predictions-cowboys-qb-surprise-plus-first-round-ties-qb-record/",
  //         "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/09/15/b7c77221-8aa7-49cb-8555-9f0e3a9ae134/thumbnail/1200x675/a6479fc26d03ef222d36b7e1999ff9f1/spencer-rattler-south-carolina-gamecocks-usatsi.jpg",
  //         "publishedAt": "2024-04-25T23:37:00Z",
  //         "content": "The 2024 NFL Draft will be kicking off in just a few hours and if the past few weeks have been any indication, this could go down as one of the craziest drafts of all time and that's mostly due to th… [+5463 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "[Removed]"
  //         },
  //         "author": null,
  //         "title": "[Removed]",
  //         "description": "[Removed]",
  //         "url": "https://removed.com",
  //         "urlToImage": null,
  //         "publishedAt": "1970-01-01T00:00:00Z",
  //         "content": "[Removed]"
  //     },
  //     {
  //         "source": {
  //             "id": "reuters",
  //             "name": "Reuters"
  //         },
  //         "author": "Reuters.com",
  //         "title": "US Supreme Court justices in Trump case lean toward some level of immunity - Reuters.com",
  //         "description": null,
  //         "url": "https://www.reuters.com/legal/us-supreme-court-weighs-trumps-bid-immunity-prosecution-2024-04-25/",
  //         "urlToImage": null,
  //         "publishedAt": "2024-04-25T23:16:45Z",
  //         "content": null
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "Deadline"
  //         },
  //         "author": "Jill Goldsmith, Anthony D'Alessandro",
  //         "title": "Skydance Still In Pole Position For Paramount As Two Hash Out Terms; Sony & Apollo Waiting In The Wings - Deadline",
  //         "description": "David Ellison's Skydance remains in pole position to gain control of Paramount Global, with Sony and Apollo waiting in the wings.",
  //         "url": "http://deadline.com/2024/04/skydance-paramount-shari-redstone-sony-apollo-1235895060/",
  //         "urlToImage": "https://deadline.com/wp-content/uploads/2024/04/shari-redstone.jpg?w=1024",
  //         "publishedAt": "2024-04-25T22:19:00Z",
  //         "content": "Skydance and Paramount are deep into hashing out a complicated deal that would see the David Ellison’s studio and its backers take control of the storied film and television company owned by Shari Re… [+5984 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "New York Post"
  //         },
  //         "author": "Katherine Donlevy",
  //         "title": "King Charles' funeral plans reportedly being updated regularly after cancer diagnosis: 'He is really very unwell' - New York Post ",
  //         "description": "“Everyone is staying optimistic, but he is really very unwell. More than they are letting on.”",
  //         "url": "https://nypost.com/2024/04/25/world-news/king-charles-funeral-plans-updated-amid-cancer-battle-report/",
  //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/04/king-charles-funeral-plans-comp.jpg?quality=75&strip=all&1714064107&w=1024",
  //         "publishedAt": "2024-04-25T22:14:00Z",
  //         "content": "King Charles’ health conditions are progressively deteriorating, leading Buckingham Palace officials to keep a regularly updated plan for his impending funeral — preparations for which started the da… [+3751 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "Investor's Business Daily"
  //         },
  //         "author": "Investor's Business Daily",
  //         "title": "Google Earnings Handily Beat Wall Street Targets. Google Stock Dividend Approved. - Investor's Business Daily",
  //         "description": "Google stock soared after parent Alphabet reported first-quarter earnings and revenue that handily beat consensus estimates.",
  //         "url": "https://www.investors.com/news/technology/google-earnings-google-stock-news-q12024/",
  //         "urlToImage": "https://www.investors.com/wp-content/uploads/2017/04/Google-sign-GOOGL-1.jpg",
  //         "publishedAt": "2024-04-25T22:05:00Z",
  //         "content": "Alphabet (GOOGL) on Thursday reported first-quarter earnings and revenue that handily beat consensus estimates. The company announced its first-ever dividend, sending Google stock soaring.\r\nXAlphabet… [+2471 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "Vulture"
  //         },
  //         "author": "Zoe Guy",
  //         "title": "Sophia Bush Confirms Relationship With Ashlyn Harris - Vulture",
  //         "description": "Sophia Bush has made her relationship with Ashlyn Harris cover-story official, coming out as queer (and denying home-wrecker allegations) in a personal essay.",
  //         "url": "http://www.vulture.com/article/sopha-bush-girlfriend-ashlyn-harris.html",
  //         "urlToImage": "https://pyxis.nymag.com/v1/imgs/ef7/18a/a4b4500f887245f6a4475962fa4480d621-sophia-bush-la.1x.rsocial.w1200.jpg",
  //         "publishedAt": "2024-04-25T21:53:04Z",
  //         "content": "Some people share their life updates in long Facebook posts. Sophia Bush shared hers in a self-authored cover story. In a Glamour essay published April 25, the actor, activist, and podcast host came … [+1528 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "ars-technica",
  //             "name": "Ars Technica"
  //         },
  //         "author": "Beth Mole",
  //         "title": "Three women contract HIV from dirty “vampire facials” at unlicensed spa - Ars Technica",
  //         "description": "Five patients with links to the spa had viral genetic sequences that closely matched.",
  //         "url": "https://arstechnica.com/science/2024/04/dirty-vampire-facials-behind-first-hiv-outbreak-linked-to-spa-treatments/",
  //         "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/04/GettyImages-1037886840-760x380.jpeg",
  //         "publishedAt": "2024-04-25T21:37:54Z",
  //         "content": "Enlarge/ Drops of the blood going onto an HIV quick test.\r\n63\r\nTrendy, unproven \"vampire facials\" performed at an unlicensed spa in New Mexico left at least three women with HIV infections. This mark… [+4511 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "associated-press",
  //             "name": "Associated Press"
  //         },
  //         "author": "DAVID HAMILTON",
  //         "title": "Net neutrality restored as FCC votes to regulate internet providers - The Associated Press",
  //         "description": "The FCC on Thursday restored rules to prevent broadband internet providers such as Comcast and AT&T from favoring some sites and apps over others — for instance, by slowing or blocking certain content or by offering higher speeds to customers willing to pay e…",
  //         "url": "https://apnews.com/article/net-neutrality-fcc-broadband-regulation-cc8421bc4f11a3e0f6ffc22c358fbfd0",
  //         "urlToImage": "https://dims.apnews.com/dims4/default/e716c74/2147483647/strip/true/crop/5855x3293+0+305/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fdb%2F64%2F15efc3f0c524d1e82cf55cc0be5b%2F88fdea03aca74897bcd2f16475f3c45d",
  //         "publishedAt": "2024-04-25T21:25:00Z",
  //         "content": "SAN FRANCISCO (AP) The FCC on Thursday restored net neutrality rules that prevent broadband internet providers such as Comcast and AT&amp;T from favoring some sites and apps over others.\r\nThe move ef… [+904 chars]"
  //     }
  // ]
  constructor() {

    super()
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7dccff29a8a947fe9d91c246b5ff4d8b&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
  }

  handelNextClick = async () => {
    console.log(`Next Clicked`);
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) { }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7dccff29a8a947fe9d91c246b5ff4d8b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true })
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({ loading: false })
      // console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })

    }
  }
  handelPreviousClick = async () => {
    console.log(`Previous Clicked`);
    console.log(`Next Clicked`);
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7dccff29a8a947fe9d91c246b5ff4d8b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ loading: false })
    // console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>News at your fingertips</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            console.log(element);
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) + " . . ." : ""}
                description={element.description ? element.description.slice(0, 88) + " . . ." : ""} imageUrl={element.urlToImage}
                newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handelPreviousClick}>Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handelNextClick}>Next</button>
        </div>
      </div>
    )
  }
}


