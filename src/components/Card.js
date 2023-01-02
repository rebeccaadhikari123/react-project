import React from "react"
 import image from '../assets/images/BBCnews.jpg'
import image0 from '../assets/images/jackel.jpg'
import image1 from '../assets/images/leopard.jpg'
import image2 from '../assets/images/Lion.jpg'
import image3 from '../assets/images/Tiger.jpg'
import image4 from '../assets/images/lophophorus.jpg'
import image5 from '../assets/images/White-rumped Vulture.jpg'
import image6 from '../assets/images/the red-headed vulture.jpg'
import image7 from '../assets/images/Lesser adjutant stork.jpg'
import image8 from '../assets/images/Great hornbill.jpg'
import image9 from '../assets/images/To kill a mocking bird.jpg'
import image10 from '../assets/images/The Diary of Young Girl.jpg'
import image11 from '../assets/images/PrideAndPrejudiceTitlePage.jpg'
import image12 from '../assets/images/The Great Gatsby.jpg'
import image13 from '../assets/images/Spring.jpg'
import image14 from '../assets/images/Summer.jpg'
import image15 from '../assets/images/Autumn.jpg'
import image16 from '../assets/images/Winter.jpg'
import image17 from '../assets/images/Image17.jpg'
import image18 from '../assets/images/Image18.jpg'
import image19 from '../assets/images/Image19.jpg'
import image20 from '../assets/images/Image20.webp'
import image21 from '../assets/images/Image21.jpg'
import image22 from '../assets/images/Image22.webp'
import image23 from '../assets/images/Image23.jpg'
import image24 from '../assets/images/Image24.webp'
import image25 from '../assets/images/Image25.jpg'
import image26 from '../assets/images/Image26.jpg'
import image27 from '../assets/images/Image27.webp'
import image28 from '../assets/images/Image28.jpg'
import image29 from '../assets/images/Image29.webp'
import image30 from '../assets/images/Image30.jpg'
import image31 from '../assets/images/Image31.webp'
import image32 from '../assets/images/Image32.webp'
import image33 from '../assets/images/Image33.jpg'
import image34 from '../assets/images/Image34.jpg'
import image35 from '../assets/images/Image35.jpg'




function Card({ data }) {
  return (
    <div className="row">
      <div className="col-sm-3">
    <div className="card">
      <img src={image} className="card-img-top" alt="/BBCnews.jpg" />
      <div className="card-body">
      {/* <span className="card-author">https://www.facebook.com/bbcnews</span> */}
        <h5 className="card-title">Serial killer The Serpent, Charles Sobhraj, freed from Nepal jail</h5>
        <p className="card-desc">Charles Sobhraj  convicted of killing two women in 1975, was linked to tourist murders in South East Asia</p> 
      {/* <p className="card-publishedat">2022-12-23T07:54:42Z</p>
      <p className="card-content">A French serial killer linked to a string of tourist murders in South East Asia in the 1970s has been freed from a Nepalese prison.</p> 
     <span className="card-source">id:" bbc news" name: "BBC News" </span>  */}
     <a href=" https://www.bbc.co.uk/news/world-asia-64073271" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <img src={image18} className="card-img-top" alt="/Image18.jpg" />
      <div className="card-body">
      {/* <span className="card-author">Null</span> */}
        <h5 className="card-title">Serial killer Charles Sobhraj freed from Nepal prison - CTV News</h5>
        <p className="card-desc">Serial killer Charles Sobhraj freed from Nepal prison  CTV News.Notorious French serial killer freed from Nepal prison  CP24Suspected serial killer Charles Sobhraj, convicted in death of Canadian, released from Nepal prison  CBC News </p> 
      {/* <p className="card-publishedat">2022-12-23T11:53:45Z</p>
      <p className="card-content">KATHMANDU, Nepal - Confessed French serial killer Charles Sobhraj was freed from prison in Nepal on Friday after serving most of his sentence for killing American and Canadian backpackers and was t… [+1549 chars]</p> 
     <span className="card-source">id:null name: 'Ctvnews.ca' </span>  */}
     <a href="https://www.ctvnews.ca/world/french-serial-killer-charles-the-serpent-sobhraj-freed-from-nepal-prison-1.6206717"  className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <img src={image17} className="card-img-top" alt="/Image17.jpg" />
      <div className="card-body">
      {/* <span className="card-author">Null</span> */}
        <h5 className="card-title">Convicted killer Charles Sobhraj freed from Nepal prison - Reuters ... - Reuters</h5>
        <p className="card-desc">Charles Sobhraj, a convicted killer who police say is responsible for a string of murders in the 1970s and 1980s, was freed from prison in Nepal on Friday after nearly 20 years behind bars, according to a Reuters witness.</p> 
      {/* <p className="card-publishedat">2022-12-23T06:53:24Z</p>
      <p className="card-content">"KATHMANDU, Dec 23 (Reuters) - Charles Sobhraj, a convicted killer who police say is responsible for a string of murders in the 1970s and 1980s, was freed from prison in Nepal on Friday after nearly 2… [+619 chars]"</p> 
     <span className="card-source">id:"'reuters'" name: "Reuters" </span>  */}
     <a href=" https://www.reuters.com/world/asia-pacific/convicted-killer-charles-sobhraj-freed-nepal-prison-witnessjail-official-2022-12-23/" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <img src={image19} className="card-img-top" alt="Image19.jpg" />
      <div className="card-body">
      {/* <span className="card-author">null</span> */}
        <h5 className="card-title">Charles 'The Serpent" Sobhraj awaits freedom from Nepal prison - Reuters</h5>
        <p className="card-desc">Charles Sobhraj, a convicted killer who police say is responsible for a string of murders in the 1970s and 1980s, is set to be released in a few hours time from a Nepal prison on Friday after nearly 20 years behind bars, a jail official said.</p> 
      {/* <p className="card-publishedat">2022-12-23T06:16:00Z</p>
      <p className="card-content">KATHMANDU, Dec 23 (Reuters) - Charles Sobhraj, a convicted killer who police say is responsible for a string of murders in the 1970s and 1980s, is set to be released in a few hours time from a Nepal … [+2885 chars]</p> 
     <span className="card-source">id:"reuters" name: "Reuters" </span>  */}
     <a href="https://www.reuters.com/world/asia-pacific/charles-the-serpent-sobhraj-awaits-freedom-nepal-prison-2022-12-23/"className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>


  <div className="col-sm-3">
    <div className="card">
      <img src={image20} className="card-img-top" alt="/Image20.webp" />
      <div className="card-body">
      {/* <span className="card-author">Hannah Ellis-Petersen South Asia correspondent</span> */}
        <h5 className="card-title">Nepal to release 'The Serpent' serial killer Charles Sobhraj</h5>
        <p className="card-desc">Nepalese supreme court orders release on account of old age of man jailed for murders of two touristsThe Nepalese supreme court has ordered the release of the French serial killer Charles Sobhraj, known as “the Serpent”, who preyed on western tourists travell…</p> 
      {/* <p className="card-publishedat">"2022-12-21T16:50:02Z"</p>
       <p className="card-content">The Nepalese supreme court has ordered the release of the French serial killer Charles Sobhraj, known as the Serpent, who preyed on western tourists travelling on the hippy trail in south Asia in the… [+1998 chars]</p> 
     <span className="card-source">id:null name:"The Guardian"  </span>  */}
     <a href="https://www.theguardian.com/world/2022/dec/21/nepal-court-orders-release-the-serpent-serial-killer-charles-sobhraj" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>


  <div className="col-sm-3">
    <div className="card">
      <img src={image21} className="card-img-top" alt="/Image21.jpg'" />
      <div className="card-body">
      {/* <span className="card-author">null</span> */}
        <h5 className="card-title">Nepal to end eight-month ban on imports of cars, phones as reserves rise - Reuters</h5>
        <p className="card-desc">Nepal will end an eight-month ban on the import of cars, expensive mobile phones and liquor on Friday as the country's foreign currency reserves have increased, officials said on Thursday.</p> 
      {/*<p className="card-publishedat">2022-12-15T11:53:00Z</p>
       <p className="card-content">KATHMANDU, Dec 15 (Reuters) - Nepal will end an eight-month ban on the import of cars, expensive mobile phones and liquor on Friday as the country's foreign currency reserves have increased, official… [+1743 chars]</p> 
     <span className="card-source">id:"reuters" name:"Reuters" </span>  */}
     <a href="https://www.reuters.com/markets/asia/nepal-end-eight-month-ban-imports-cars-phones-reserves-rise-2022-12-15/" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>


  <div className="col-sm-3">
    <div className="card">
      <img src={image22} className="card-img-top" alt="/Image22.webp" />
      <div className="card-body">
      {/* <span className="card-author">null</span> */}
        <h5 className="card-title">Nepal's new govt seeks to balance its ties with India, China in ... - Reuters</h5>
        <p className="card-desc">Nepal's new government, led by a former Maoist rebel commander, will try to balance ties with its immediate neighbours China and India for the economic growth of one of the world's poorest countries, officials of the ruling coalition told Reuters.</p> 
      {/*<p className="card-publishedat">2022-12-26T08:11:00Z</p>
       <p className="card-content">KATHMANDU, Dec 26 (Reuters) - Nepal's new government, led by a former Maoist rebel commander, will try to balance ties with its immediate neighbours China and India for the economic growth of one of … [+2615 chars]</p> 
     <span className="card-source">id:"reuters" name:"Reuters"  </span>  */}
     <a href="https://www.reuters.com/world/asia-pacific/nepals-new-govt-seeks-balance-its-ties-with-india-china-growth-pursuit-2022-12-26/" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>


  <div className="col-sm-3">
    <div className="card">
      <img src={image23} className="card-img-top" alt="/Image23.jpg" />
      <div className="card-body">
      {/* <span className="card-author">null</span> */}
        <h5 className="card-title">Nepal court to release serial killer Charles 'the serpent' Sobhraj - Reuters.com</h5>
        <p className="card-desc">Nepal's Supreme Court on Wednesday ordered the release, due to his age, of Charles Sobhraj, a French national known as "the serpent" who police say is responsible for a string of murders in the 1970s and 1980s.</p> 
      {/* <p className="card-publishedat">2022-12-21T16:29:00Z</p>
      <p className="card-content">"KATHMANDU, Dec 21 (Reuters) - Nepal's Supreme Court on Wednesday ordered the release, due to his age, of Charles Sobhraj, a French national known as "the serpent" who police say is responsible for a … [+1788 chars]"</p> 
     <span className="card-source">id:"reuters" name: "Reuters" </span>  */}
     <a href="https://www.reuters.com/world/asia-pacific/nepal-court-release-serial-killer-charles-the-serpent-sobhraj-2022-12-21/" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <img src={image24} className="card-img-top" alt="/Image24.webp" />
      <div className="card-body">
      {/* <span className="card-author">null</span> */}
        <h5 className="card-title">Nepal president gives parties a week to form new government - Reuters</h5>
        <p className="card-desc">Nepal's president on Sunday called on the country's political parties to try to form the new government within a week after last month's inconclusive national election.</p> 
      {/* <p className="card-publishedat">2022-12-18T13:06:00Z</p>
       <p className="card-content">"KATHMANDU, Dec 18 (Reuters) - Nepal's president on Sunday called on the country's political parties to try to form the new government within a week after last month's inconclusive national election.
… [+1336 chars]"</p> 
     <span className="card-source">id:"reuters"name: "Reuters" </span>  */}
     <a href="https://www.reuters.com/resizer/CqTCZnJOqMSvAEZHpF08U9LyHz0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SVOFRPOG5RJ2ROHY3TQCSKQDYA.jpg" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <img src={image25} className="card-img-top" alt="Image25.jpg" />
      <div className="card-body">
      {/* <span className="card-author">"Lauren Frayer"</span> */}
        <h5 className="card-title">Death and dishonesty: Stories of two workers who built the World Cup stadiums in Qatar</h5>
        <p className="card-desc">Vinod Kumar of India and Anish Adhikari of Nepal are among the many migrant workers who helped build the stadiums. Adhikari says he was misled about working conditions. Kumar died on the job.</p> 
      {/* <p className="card-publishedat">2022-12-02T10:05:31Z</p>
       <p className="card-content">"Ashwini Kumar, 24, shows a photo on his phone of his brother Vinod, who died in October 2020 in Qatar, where he was one of the many migrant workers building World Cup stadiums. His family has heard c… [+7789 chars]"</p> 
     <span className="card-source">id:null name:"NPR"  </span>  */}
     <a href="https://www.npr.org/sections/goatsandsoda/2022/12/02/1140260086/the-world-cup-has-taken-a-toll-on-the-migrant-workers-who-made-it-possible"className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <img src={image26} className="card-img-top" alt="/Image26.jpg" />
      <div className="card-body">
      {/* <span className="card-author">"https://www.facebook.com/bbcnews"</span> */}
        <h5 className="card-title">India and China troops clash on Arunachal Pradesh mountain border</h5>
        <p className="card-desc">The Indian army says a small number of soldiers fought on Friday but both sides disengaged quickly.</p> 
      {/* <p className="card-publishedat">2022-12-13T03:52:26Z</p>
       <p className="card-content">"India says its forces have clashed with Chinese troops in a disputed area along the border, the first such flare-up in more than a year.
The nations had been working to de-escalate tensions since a … [+1678 chars]"</p> 
     <span className="card-source">id:"bbc-news" name:"BBC News"  </span>  */}
     <a href="https://www.bbc.co.uk/news/world-asia-63953400" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <img src={image27} className="card-img-top" alt="/Image27.webp" />
      <div className="card-body">
      {/* <span className="card-author">"Reuters in Paris"</span> */}
        <h5 className="card-title">'Serpent' serial killer Charles Sobhraj returns to France after 19 years in prison</h5>
        <p className="card-desc">Sobhraj arrives in Paris on commercial flight after release from Nepalese prison on health groundsCharles Sobhraj, a convicted killer known as “the serpent” who police believe targeted western backpackers on the hippie trail in the 1970s, has returned to Fran…</p> 
      {/* <p className="card-publishede">2022-12-24T09:58:04Z</p>
       <p className="card-content">"Charles Sobhraj, a convicted killer known as the Serpent who police believe targeted western backpackers on the hippie trail in the 1970s, has returned to France after nearly two decades behind bars … [+1988 chars]"</p> 
     <span className="card-source">id:null name: "The Guardian" </span>  */}
     <a href="https://www.theguardian.com/world/2022/dec/24/serpent-serial-killer-charles-sobhraj-returns-to-france-after-19-years-in-prison" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <img src={image28} className="card-img-top" alt="/Image28.jpg" />
      <div className="card-body">
      {/* <span className="card-author">"Yongey Mingyur Rinpoche, contact@ted.com (TED)"</span> */}
        <h5 className="card-title">How to tap into your awareness -- and why meditation is easier than you think | Yongey Mingyur Rinpoche</h5>
        <p className="card-desc">Meditation asks you to slip into a state of serene presence. But why does something that sounds effortless often feel so difficult? In this lighthearted invitation, spiritual leader Yongey Mingyur Rinpoche shares three steps to help you accept the ebb and flo…</p> 
      {/* <p className="card-publishede">2022-12-06T15:27:49Z</p>
       <p className="card-content">"Yongey Mingyur Rinpoche TED2022
Meditation asks you to slip into a state of serene presence. But why does something that sounds effortless often feel so difficult? In this lighthearted invitation, s… [+1407 chars]"</p> 
     <span className="card-source">id:null name:"Ted.com"  </span>  */}
     <a href="https://www.ted.com/talks/yongey_mingyur_rinpoche_how_to_tap_into_your_awareness_and_why_meditation_is_easier_than_you_think" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <img src={image29} className="card-img-top" alt="Image29.webp" />
      <div className="card-body">
      {/* <span className="card-author">null</span> */}
        <h5 className="card-title">Nepali groups urge FIFA to 'make things right' for migrant workers - Reuters</h5>
        <p className="card-desc">More than three dozen Nepali civil society groups on Thursday called on FIFA President Gianni Infantino to "stop looking the other way" while migrant workers are denied compensation after having "suffered abuses in Qatar", Amnesty International said.</p> 
      {/* <p className="card-publishedat">2022-12-15T02:55:00Z</p>
       <p className="card-content">"Dec 15 (Reuters) - More than three dozen Nepali civil society groups on Thursday called on FIFA President Gianni Infantino to "stop looking the other way" while migrant workers are denied compensatio… [+2132 chars]"</p> 
     <span className="card-source">id:"reuters" name: "Reuters"</span>  */}
     <a href="https://www.reuters.com/lifestyle/sports/nepali-groups-urge-fifa-make-things-right-migrant-workers-2022-12-15/" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <img src={image30} className="card-img-top" alt="/Image30.jpg" />
      <div className="card-body">
      {/* <span className="card-author">"BINAJ GURUBACHARYA Associated Press"</span> */}
        <h5 className="card-title">Notorious French serial killer freed from Nepal prison</h5>
        <p className="card-desc">Confessed French serial killer Charles Sobhraj has been released from prison in Nepal after serving most of his sentence</p> 
      {/* <p className="card-publishedat">2022-12-23T08:20:14Z</p>
       <p className="card-content">"KATHMANDU, Nepal -- Confessed French serial killer Charles Sobhraj was freed from prison in Nepal on Friday after serving most of his sentence for the murders of American and Canadian backpackers.
S… [+1463 chars]"</p> 
     <span className="card-source">id:"abc-news" name: "ABC News" </span>  */}
     <a href="https://s.abcnews.com/images/International/WireAP_42fa6772bef4444eaeeb4bbfae2a642f_16x9_992.jpg" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <img src={image31} className="card-img-top" alt="/Image31.webp" />
      <div className="card-body">
      {/* <span className="card-author">null</span> */}
        <h5 className="card-title">Nepal's ex-guerrilla chief set to become new prime minister - Reuters</h5>
        <p className="card-desc">A former Maoist guerrilla who led a decade-long insurgency against Nepal's Hindu monarchy will take over as prime minister in alliance with the main opposition after last month's election returned a hung parliament, party officials said on Sunday.</p> 
      {/* <p className="card-publishedat">2022-12-25T11:58:00Z</p>
       <p className="card-content">"KATHMANDU, Dec 25 (Reuters) - A former Maoist guerrilla who led a decade-long insurgency against Nepal's Hindu monarchy will take over as prime minister in alliance with the main opposition after las… [+1638 chars]"</p> 
     <span className="card-source">id:"reuters" name: "Reuters" </span>  */}
     <a href="https://www.reuters.com/world/asia-pacific/nepals-ex-guerrilla-chief-set-become-new-prime-minister-2022-12-25/" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <img src={image32} className="card-img-top" alt="/Image32.webp" />
      <div className="card-body">
      {/* <span className="card-author">"sbraner@insider.com (Sarah Braner)"</span> */}
        <h5 className="card-title">A new cholera outbreak is killing hundreds in Haiti. Scientists think it's the same strain that was brought to the country by UN troops more than a decade ago.</h5>
        <p className="card-desc">The current strain of cholera fueling an outbreak in Haiti is likely related to the strain that caused the 2010 outbreak, according to scientists.</p> 
      {/* <p className="card-publishedat">2022-12-29T16:33:59Z</p>
       <p className="card-content">"Less than a year after the Haitian government declared that cholera had been eliminated in the country, thousands of people are being sickened by the disease again. According to a World Health Organi… [+3855 chars]"</p> 
     <span className="card-source">id:"business-insider" name: "Business Insider" </span>  */}
     <a href="https://www.businessinsider.com/cholera-spreading-in-haiti-is-likely-descended-from-2010-strain-2022-12" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <img src={image33} className="card-img-top" alt="/Image33.jpg" />
      <div className="card-body">
      {/* <span className="card-author">null</span> */}
        <h5 className="card-title">Serial killer The Serpent, Charles Sobhraj, leaves jail in police car</h5>
        <p className="card-desc">Charles Sobhraj is freed after serving 19 years for several tourist murders in Asia in the 1970s.</p> 
      {/* <p className="card-publishedat">"2022-12-23T11:21:09Z"</p>
       <p className="card-content">"The serial killer known as The Serpent has been driven from a jail in Nepal after being freed. 
Charles Sobhraj, 78, spent 19 years in prison for killing two North Americans in 1975. 
He left the f… [+152 chars]"</p> 
     <span className="card-source">id:"bbc-news" name: "BBC-News" </span>  */}
     <a href="https://www.bbc.co.uk/news/av/world-asia-64077217" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <img src={image34} className="card-img-top" alt="/Image34.jpg" />
      <div className="card-body">
      {/* <span className="card-author">null</span> */}
        <h5 className="card-title">India's poultry industry seeks corn export curb to calm local prices - Reuters</h5>
        <p className="card-desc">India needs to restrict corn exports to curb a rise in domestic prices and to ensure sufficient supplies of the main poultry feed, the country's livestock industry said on Tuesday.</p> 
      {/* <p className="card-publishedat">2022-12-13T14:26:00Z</p>
       <p className="card-content">"NEW DELHI, Dec 13 (Reuters) - India needs to restrict corn exports to curb a rise in domestic prices and to ensure sufficient supplies of the main poultry feed, the country's livestock industry said … [+1950 chars]"</p> 
     <span className="card-source">id:"reuters" name:"Reuters" </span>  */}
     <a href="https://www.reuters.com/markets/commodities/indias-poultry-industry-seeks-corn-export-curb-calm-local-prices-2022-12-13/" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <img src={image35} className="card-img-top" alt="/Image35.jpg" />
      <div className="card-body">
      {/* <span className="card-author">"https://www.facebook.com/bbcnews"</span> */}
        <h5 className="card-title">Serial killer The Serpent, Charles Sobhraj, to be freed from Nepal jail</h5>
        <p className="card-desc">Frenchman Charles Sobhraj, a serial killer portrayed in a hit BBC drama, will be released and deported.</p> 
      {/* <p className="card-publishedat">2022-12-21T16:51:01Z</p>
       <p className="card-content">"A French serial killer portrayed in BBC drama The Serpent is to be freed from a Nepal prison, after a top court ruling.
Charles Sobhraj, who spent 19 years in jail for the murder of two tourists in … [+2140 chars]"</p> 
     <span className="card-source">id:"bbc-news" name: "BBC-News" </span>  */}
     <a href="https://www.bbc.co.uk/news/world-asia-64050714" className="btn btn-primary">Click-me</a>
       
      </div>
    </div>
  </div>


  <div className="col-sm-3">
    <div className="card">
      <img src={image0} className="card-img-top" alt="/jackel.jpg" />
      <div className="card-body">
        <h5 className="card-title">Jackel</h5>
        <p className="card-text">Jackals are medium-sized canids native to Africa and Eurasia. While the word "jackal" has historically been used for many canines of the subtribe canina.</p>
        <a href="https://en.wikipedia.org/wiki/Jackal" className="btn btn-primary">Click-me</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <img src={image1} className="card-img-top" alt="/leopard.jpg" />
      <div className="card-body">
        <h5 className="card-title">Leopard</h5>
        <p className="card-text">The leopard (Panthera pardus) is one of the five extant species in the genus Panthera, a member of the cat family, Felidae.It occurs in a wide range in sub-Saharan Africa, in some parts of Western and Central Asia, Southern Russia, and on the Indian subcontinent to Southeast and East Asia.</p>
        <a href="https://en.wikipedia.org/wiki/Leopard" className="btn btn-primary">Click-Me</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <img src={image2} className="card-img-top" alt="/Lion.jpg" />
      <div className="card-body">
        <h5 className="card-title">Lion</h5>
        <p className="card-text">The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body; short, rounded head; round ears; and a hairy tuft at the end of its tail.  </p>
        <a href="https://en.wikipedia.org/wiki/Lion" className="btn btn-primary">Click-Me</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <img src={image3} className="card-img-top" alt="/Tiger.jpg" />
      <div className="card-body">
        <h5 className="card-title">Tiger</h5>
        <p className="card-text">The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside.</p>
        <a href="https://en.wikipedia.org/wiki/Tiger" className="btn btn-primary">Click-Me</a>
      </div>
    </div>
    </div>

    <div className="col-sm-3">
    <div className="card">
      <img src={image4} className="card-img-top" alt="/lophophorus.jpg" />
      <div className="card-body">
        <h5 className="card-title">Himalayan Monal</h5>
        <p className="card-text">The Himalayan monal (Lophophorus impejanus), also called Impeyan monal and Impeyan pheasant, is a pheasant native to Himalayan forests and shrublands at elevations of 2,100 to 4,500 m (6,900 to 14,800 ft). </p>
        <a href="https://en.wikipedia.org/wiki/Himalayan_monal" className="btn btn-primary">Click-e</a>
      </div>
    </div>
    </div>

    <div className="col-sm-3">
    <div className="card">
      <img src={image5} className="card-img-top" alt="/White-rumped Vulture.jpg" />
      <div className="card-body">
        <h5 className="card-title">White-rumped Vulture</h5>
        <p className="card-text">The white-rumped vulture (Gyps bengalensis) is an Old World vulture native to South and Southeast Asia. It has been listed as Critically Endangered on the IUCN Red List since 2000, as the population severely declined.</p>
        <a href="https://en.wikipedia.org/wiki/White-rumped_vulture" className="btn btn-primary">Click-me</a>
      </div>
    </div>
    </div>

    <div className="col-sm-3">
    <div className="card">
      <img src={image6} className="card-img-top" alt="/the red-headed vulture.jpg" />
      <div className="card-body">
        <h5 className="card-title">Red-headed Vulture</h5>
        <p className="card-text">It is a medium-sized vulture of 76 to 86 cm (30 to 34 in) in length, weighing 3.5 to 6.3 kg (7.7 to 13.9 lb) and having a wingspan of about 1.99 to 2.6 m (6.5 to 8.5 ft).</p>
        <a href="https://en.wikipedia.org/wiki/Red-headed_vulture#:~:text=The%20red%2Dheaded%20vulture%20(Sarcogyps,some%20parts%20of%20Southeast%20Asia." className="btn btn-primary">Click-me</a>
      </div>
    </div>
    </div>

    <div className="col-sm-3">
    <div className="card">
      <img src={image7} className="card-img-top" alt="/Lesser adjutant stork.jpg" />
      <div className="card-body">
        <h5 className="card-title">Lesser adjutant stork</h5>
        <p className="card-text">The lesser adjutant (Leptoptilos javanicus) is a large wading bird in the stork family Ciconiidae. Like other members of its genus, it has a bare neck and head. It is however more closely associated with wetland habitats where it is solitary and is less likely to scavenge than the related greater adjutant.</p>
        <a href="https://en.wikipedia.org/wiki/Lesser_adjutant" className="btn btn-primary">Click-me</a>
      </div>
    </div>
    </div>

    <div className="col-sm-3">
    <div className="card">
      <img src={image8} className="card-img-top" alt="/Great hornbill.jpg" />
      <div className="card-body">
        <h5 className="card-title">Great Hornbill</h5>
        <p className="card-text">The great hornbill (Buceros bicornis), also known as the concave-casqued hornbill, great Indian hornbill or great pied hornbill, is one of the larger members of the hornbill family. It is predominantly frugivorous, but also preys on small mammals, reptiles and birds. </p>
        <a href="https://en.wikipedia.org/wiki/Great_hornbill" className="btn btn-primary">Click-me</a>
      </div>
    </div>
    </div>

    <div className="col-sm-3">
    <div className="card">
      <img src={image9} className="card-img-top" alt="/To kill a mocking bird.jpg" />
      <div className="card-body">
        <h5 className="card-title">To Kill A Mockingbird</h5>
        <p className="card-text">To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools.   </p>
        <a href="https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird" className="btn btn-primary">Click-me</a>
      </div>
    </div>
    </div>

    <div className="col-sm-3">
    <div className="card">
      <img src={image10} className="card-img-top" alt="/The Diary of Young Girl.jpg" />
      <div className="card-body">
        <h5 className="card-title">The Diary of a Young Girl</h5>
        <p className="card-text">The Diary of a Young Girl, also known as The Diary of Anne Frank, is a book of the writings from the Dutch-language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands. </p>
        <a href="https://en.wikipedia.org/wiki/The_Diary_of_a_Young_Girl" className="btn btn-primary">Click-me</a>
      </div>
    </div>
    </div>

    <div className="col-sm-3">
    <div className="card">
      <img src={image11} className="card-img-top" alt="/PrideAndPrejudiceTitlePage.jpg" />
      <div className="card-body">
        <h5 className="card-title">Pride and Prejudice</h5>
        <p className="card-text">Pride and Prejudice is an 1813 novel of manners by Jane Austen. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.  </p>
        <a href="https://en.wikipedia.org/wiki/Pride_and_Prejudice" className="btn btn-primary">Click-me</a>
      </div>
    </div>
    </div>

    <div className="col-sm-3">
    <div className="card">
      <img src={image12} className="card-img-top" alt="/The Great Gatsby.jpg" />
      <div className="card-body">
        <h5 className="card-title">The Great Gatsby</h5>
        <p className="card-text">The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.  </p>
        <a href="https://en.wikipedia.org/wiki/The_Great_Gatsby" className="btn btn-primary">Click-me</a>
      </div>
    </div>
    </div>

    <div className="col-sm-3">
    <div className="card">
      <img src={image13} className="card-img-top" alt="/Spring.jpg" />
      <div className="card-body">
        <h5 className="card-title">Spring</h5>
        <p className="card-text">Spring, also known as springtime, is one of the four temperate seasons, succeeding winter and preceding summer.   </p>
        <a href="https://en.wikipedia.org/wiki/Spring_(season)" className="btn btn-primary">Click-me</a>
      </div>
    </div>
    </div>

    <div className="col-sm-3">
    <div className="card">
      <img src={image14} className="card-img-top" alt="/Summer.jpg" />
      <div className="card-body">
        <h5 className="card-title">Summer</h5>
        <p className="card-text">Summer is the hottest of the four temperate seasons, occurring after spring and before autumn.    </p>
        <a href="https://en.wikipedia.org/wiki/Summer" className="btn btn-primary">Click-me</a>
      </div>
    </div>
    </div>

    <div className="col-sm-3">
    <div className="card">
      <img src={image15} className="card-img-top" alt="/Autumn.jpg" />
      <div className="card-body">
        <h5 className="card-title">Autumn</h5>
        <p className="card-text">Autumn, also known as fall in American English and Canadian English,is one of the four temperate seasons on Earth.    </p>
        <a href="https://en.wikipedia.org/wiki/Summer" className="btn btn-primary">Click-me</a>
      </div>
    </div>
    </div>


    <div className="col-sm-3">
    <div className="card">
      <img src={image16} className="card-img-top" alt="Winter.jpg" />
      <div className="card-body">
        <h5 className="card-title">Winter</h5>
        <p className="card-text">Winter is the coldest season of the year in polar and temperate climates. It occurs after autumn and before spring. The tilt of Earth's axis causes seasons; winter occurs when a hemisphere is oriented away from the Sun.   </p>
        <a href="https://en.wikipedia.org/wiki/Winter" className="btn btn-primary">Click-me</a>
      </div>
    </div>
    </div> 

</div>

  )
}

export default Card;
