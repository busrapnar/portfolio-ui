const PostDetail = () => {
  return (
    <div className="mt-20">
      <header>
        <h1 className="font-semibold text-2xl">Uyku ve Rızık</h1>
        <h2 className="mt-2 text-xl">Gerçekten başarının şifresi erken uyanmak olabilir mi?</h2>
        <div className="mt-10 flex items-center text-lg space-x-2 opacity-60">
          <time dateTime="2023-04-15T00:00:00.000Z">15 Nisan 2023</time>
          <span>·</span>
          <span>2 min read</span>
          <span>·</span>
          <span>503 görüntüleme</span>
        </div>
      </header>
      <div className="post-body mt-10 leading-relaxed text-lg text-zinc-800 dark:text-zinc-200">
        <p>Kimi zaman motivasyon konuşmalarında kimi zaman zengin insanların söyleşilerinde denk geldiğimiz <strong className="font-semibold">“sabah 4 gibi uyanıyorum”</strong> cümlesiyle çoğu zaman dalga geçip tiye alıyoruz. Peki ya gerçekten başarının ve maddi zenginliğin şifresi bu olabilir mi?</p>
        <p className="mt-5">Ben müslüman olduğum için konuya bu perspektiften bakacağım.</p>
        <p className="mt-5">İslamda gece uykusu dışında üç çeşit uyku var. Ben bunlardan gaylule uykusuna dikkat çekeceğim.</p>
        <p className="mt-5"><strong className="font-semibold">Gaylule</strong>: Ortalığın aydınlanmaya başladığı vakitten, güneşin tamamen doğup kerahet vaktinin çıkıncaya kadarki geçen süre.</p>
        <p className="mt-5">İnsanın en dinç ve en üretken zamanı sabahın bu saatlerinde oluyor. Daha önce (zorunda olmadan, isteyerek) güne erken başlamış herkes bunu iyi bilecektir. Bu üretken saati kaçırdıktan sonraki dilimlerde uyanan insanın (tabiri caizse) şirazesi kayıyor ve güne yorgun başlıyor (kendimden biliyorum). Yani hem rızık kaçıyor hem fiziksel çöküş oluyor. Rızık nasıl kaçıyor?</p>
        <figure className="bg-zinc-100 p-6 mt-5 dark:bg-zinc-800 sm:rounded-xl">
          <blockquote className="opacity-90">Sabah namazından sonra uyumak rızka manidir.</blockquote>
          <figcaption className="mt-2 font-serif opacity-70">— Beyhakî, el-âdâb, 1/276; Şarani, Levakıh-u'l-Envar, s. 295</figcaption>
        </figure>
        <p className="mt-5">Girişte de belirttiğim gibi, bu eylemin çıktısını başarı ve maddi zenginlik diyerek ikiye ayırdım. Her sabah erken kalkan zengin olacak diyormuşum gibi anlaşılmasını istemem. Başarı dediğim şey; öğrenmek veya bir iş tamamlamak için çıkılan yolda olumlu sonuç almak diyebilirim. <strong className="font-semibold"><em>"Peki başarıya ulaşmak için ille de sabahın nurunda mı uyanmam lazım, ben gece çalışarak da başarıyorum"</em></strong> diyen olabilir. Buradaki konu zaten işin hikmet ve manevi boyutu.</p>
        <p className="mt-5"><strong className="font-semibold">İşin manevi boyutuyla birleştiğinde</strong> başarıların toplamı maddi gücü getirme olasılığını yükseltiyor.</p>
        <figure className="bg-zinc-100 mt-5 p-6 dark:bg-zinc-800 sm:rounded-xl">
          <blockquote className="opacity-90">İnsana ancak çalıştığının karşılığı vardır.</blockquote>
          <figcaption className="mt-2 font-serif opacity-70">— Necm, 53/39</figcaption>
        </figure>
        <p className="mt-5">Ayetten de anlayacağımız üzere; her sabah erkenden kalkmak CEO olmak için yeterli değil. Allah(cc) şart koşuyor, erkenden kalkıp emek veren insanların emeklerinin zayi olmayacağına söz veriyor.</p>
        <p className="mt-5">Üstelik dikkat ederseniz Allah(cc) bu ayetinde sadece inananlara değil insanlığa sesleniyor. Yani bu kural sadece müslümanlar için değil her kim bu öğüte uyarsa rızıklanacağını anlıyoruz.</p>
        <p className="mt-5">İnananlar için sabah namazından sonra uyumamak (inanmayanlar için o vakitlerde ayakta olmak) ve rızkını araması öğütleniyor. Her sabah dağıtılan rızıktan mahrum olmamak adına buna çok dikkat etmek gerekiyor.</p>
        <ul className="list-inside mt-5 list-disc space-y-2 marker:text-zinc-400 dark:marker:text-zinc-600">
          <li>
            <a href="https://sorularlaislamiyet.com/sabah-namazindan-sonra-ve-ikindi-vakti-ile-aksam-ezani-arasi-uyumak-feylule-gaylule-ve-kaylule" className="decoration-2 underline-offset-2 dark:hover:text-zinc-50 dark:hover:decoration-indigo-600 underline decoration-zinc-500 hover:text-zinc-900 dark:decoration-zinc-600" rel="noopener noreferrer" target="_blank">https://sorularlaislamiyet.com/sabah-namazindan-sonra-ve-ikindi-vakti-ile-aksam-ezani-arasi-uyumak-feylule-gaylule-ve-kaylule</a>
          </li>
          <li>
            <a href="https://sorularlaislamiyet.com/insan-icin-ancak-calistiginin-karsiligi-vardir-ayetini-aciklar-misiniz-her-turlu-calismalarda" className="decoration-2 underline-offset-2 dark:hover:text-zinc-50 dark:hover:decoration-indigo-600 underline decoration-zinc-500 hover:text-zinc-900 dark:decoration-zinc-600" rel="noopener noreferrer" target="_blank">https://sorularlaislamiyet.com/insan-icin-ancak-calistiginin-karsiligi-vardir-ayetini-aciklar-misiniz-her-turlu-calismalarda</a>
          </li>
        </ul>
      </div>
      <div className="mt-20 divide-y rounded border dark:divide-zinc-800 dark:border-zinc-800"></div>
    </div>
  );
};

export default PostDetail;