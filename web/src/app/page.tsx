type Quote = {
  id: string;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  context: string;
  source: { label: string; href?: string };
  attribution: "i sigurtë" | "i atribuar";
};

type Narration = {
  id: string;
  label: string;
  arabic: string;
  translation: string;
  details: string;
  source: { label: string; href?: string };
};

const quotes: Quote[] = [
  {
    id: "q1",
    title: "Lotët që shuajnë zjarrin",
    arabic: "دُمُوعُ اللَّيْلِ تُطْفِئُ نَارَ النَّهَارِ.",
    transliteration: "Dumūʿu al-layli tuṭfiʾu nāra an-nahār.",
    translation: "Lotët e natës shuajnë zjarrin e ditës.",
    context:
      "Këshillë e njohur e Ibn al-Mubarakut mbi pendimin e sinqertë dhe rolin e lotëve në fshirjen e gjynaheve.",
    source: {
      label: "Ṣifat al-Ṣafwah, vëll. 4, f. 135",
      href: "https://r.jina.ai/https://ia803202.us.archive.org/30/items/sifatussafwah/sifatussafwah04.pdf",
    },
    attribution: "i atribuar",
  },
  {
    id: "q2",
    title: "Një çast i përmallimit",
    arabic:
      "لَبُكَاءُ السَّاعَةِ مِنْ خَشْيَةِ اللَّهِ أَحَبُّ إِلَيَّ مِنْ إِنْفَاقِ أَلْفِ دِينَارٍ فِي سَبِيلِهِ.",
    transliteration:
      "Labukāʾu as-sāʿati min khashyati Llāhi aḥabbu ilayya min infāqi alfi dīnār fī sabīlihi.",
    translation:
      "Një orë lotësh nga frika e Allahut më është më e dashur se të shpenzoj një mijë dinarë në rrugën e Tij.",
    context:
      "Thënie që e vendos përmallimin e sinqertë mbi shfaqjet e jashtme të bujarisë materiale.",
    source: {
      label: "Ḥilyat al-Awliyāʾ, vëll. 8, f. 167",
      href: "https://r.jina.ai/https://ia802608.us.archive.org/2/items/hilyat_al_awliya/hilyat_al_awliya_08.pdf",
    },
    attribution: "i atribuar",
  },
  {
    id: "q3",
    title: "Përulësia në vetmi",
    arabic:
      "إِذَا مَا اللَّيْلُ أَظْلَمَ كَابَدُوهُ فَيُسْفِرُ عَنْهُمْ وَهُمْ رُكُوعُ · أَطَارَ الْخَوْفُ نَوْمَهُمْ فَقَامُوا وَأَهْلُ الْأَمْنِ فِي الدُّنْيَا هُجُوعُ.",
    transliteration:
      "Idhā mā al-laylu aẓlama kābadūhu fa-yusfiru ʿanhum wahum rukūʿ · Aṭāra al-khawfu nawmuhum faqāmū wa-ʾahlu al-amni fī d-dunyā hujūʿ.",
    translation:
      "Kur nata nxihet ata e mundin, dhe agimi i gjen në përkulje; frika ua ka flakur gjumin, prandaj ngrihen, ndërsa ata që ndihen të sigurt flenë.",
    context:
      "Dy vargje nga poema e tij e njohur për adhurimin e natës, që përshkruan gjurin e lotëve dhe ankthin e zemrës.",
    source: {
      label: "Wikisource · \"Idhā mā al-laylu aẓlama kābadūhu\"",
      href: "https://ar.wikisource.org/wiki/%D8%A5%D8%B0%D8%A7_%D9%85%D8%A7_%D8%A7%D9%84%D9%84%D9%8A%D9%84_%D8%A3%D8%B8%D9%84%D9%85_%D9%83%D8%A7%D8%A8%D8%AF%D9%88%D9%87",
    },
    attribution: "i sigurtë",
  },
];

const narrations: Narration[] = [
  {
    id: "n1",
    label: "Dy sy të shpëtuar prej Zjarrit",
    arabic:
      "عَيْنَانِ لَا تَمَسُّهُمَا النَّارُ: عَيْنٌ بَكَتْ مِنْ خَشْيَةِ اللهِ، وَعَيْنٌ بَاتَتْ تَحْرُسُ فِي سَبِيلِ اللهِ.",
    translation:
      "Dy sy nuk do t’i prekë Zjarri: syri që ka qarë nga frika e Allahut dhe syri që ka qëndruar rojë në rrugën e Allahut.",
    details:
      "Ibn al-Mubarak e përmblodhi këtë hadith në \"Kitāb az-Zuhd\" duke nënvizuar se loti i sinqertë është mburojë shpirtërore.",
    source: {
      label: "Kitāb az-Zuhd li Ibn al-Mubārak, nr. 1254 · Sunan at-Tirmidhī 1639",
      href: "https://r.jina.ai/https://ia801509.us.archive.org/28/items/waq44228/44228.pdf",
    },
  },
  {
    id: "n2",
    label: "Loti që e ndalon Zjarrin",
    arabic:
      "لَا يَلِجُ النَّارَ رَجُلٌ بَكَى مِنْ خَشْيَةِ اللهِ حَتَّى يَعُودَ اللَّبَنُ فِي الضَّرْعِ.",
    translation:
      "Nuk hyn në Zotëri një njeri që ka qarë nga frika e Allahut, derisa qumështi të kthehet në gji.",
    details:
      "Një nga transmetimet që ai përsëriste për të zgjuar frikën e dobishme (khawf) tek nxënësit dhe shokët e tij.",
    source: {
      label: "Kitāb az-Zuhd, nr. 1311 · Sunan at-Tirmidhī 1633",
      href: "https://r.jina.ai/https://ia801509.us.archive.org/28/items/waq44228/44228.pdf",
    },
  },
  {
    id: "n3",
    label: "Pasuria e lotëve",
    arabic:
      "لَوْ عَلِمْتُمْ مَا عَلِمْتُ لَضَحِكْتُمْ قَلِيلًا وَلَبَكَيْتُمْ كَثِيرًا.",
    translation:
      "Sikur të dinit atë që di unë, do të qeshnit pak e do të qanit shumë.",
    details:
      "Ibn al-Mubarak e sillte shpesh këtë hadith profetik për të treguar se dituria e thellë sjell thjeshtësi dhe lot.",
    source: {
      label: "Kitāb az-Zuhd, kapitulli i frikës · al-Bukhārī 4623",
      href: "https://r.jina.ai/https://ia801509.us.archive.org/28/items/waq44228/44228.pdf",
    },
  },
];

const timeline = [
  {
    period: "118 H / 736",
    title: "Lindja në Marv",
    description:
      "Abdullah ibn al-Mubarak lindi në qytetin Kāraj (afër Marvit) në Horasan, në një familje turko-mevsopotanase, duke u rritur mes tregtarëve dhe dijetarëve.",
  },
  {
    period: "140-160 H",
    title: "Formimi me lotë dhe dije",
    description:
      "Studioi tek imamët Sufyān ath-Thawrī dhe al-Awzāʿī. Në këshillat e tyre përmendej shpesht loti nga frika e Allahut, që e shoqëroi në gjithë udhëtimet.",
  },
  {
    period: "170 H",
    title: "Kitāb az-Zuhd",
    description:
      "Shkroi përmbledhjen e famshme të citateve dhe haditheve rreth zellit, pendimit dhe lotëve. Vepra u bë referencë për t’u rikthyer zemrës butësinë.",
  },
  {
    period: "181 H / 797",
    title: "Ndërroi jetë në Mosul",
    description:
      "Gjatë një udhëtimi xhihadi në kufijtë e Shamit, u sëmur dhe vdiq në Mosul. U përmend si shembull i përbashkimit të xhihadit, dijes dhe qetësimit të zemrës.",
  },
];

const footnotes = [
  {
    id: "1",
    text:
      "Ṣifat al-Ṣafwah (Ibn al-Jawzī), vëll. 4, f. 135 – cituar për thënien \"Lotët e natës shuajnë zjarrin e ditës\".",
  },
  {
    id: "2",
    text:
      "Ḥilyat al-Awliyāʾ (Abū Nuʿaym al-Iṣfahānī), vëll. 8, f. 167 – përparësia e lotit ndaj bujarisë materiale.",
  },
  {
    id: "3",
    text:
      "Kitāb az-Zuhd (Ibn al-Mubārak), kapitujt 'al-Bukāʾ' dhe 'al-Khawf' – për hadithet mbi lotët; krahaso edhe Sunan at-Tirmidhī, nr. 1633 & 1639.",
  },
  {
    id: "4",
    text:
      "Poema \"Idhā mā al-laylu aẓlama kābadūhu\" i atribuohet Ibn al-Mubarakut dhe ruhet në shumë antologji poetike; shih Wikisource (ar).",
  },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-blue-100/60 via-white to-transparent blur-[80px]" />

      <header className="flex flex-col items-center gap-6 text-center">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-blue-700/80">
          Abdullah ibn al-Mubarak (118-181 H)
        </p>
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Fjalë dhe transmetime për lotin, përmallimin dhe zemrën e butë
        </h1>
        <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
          Një përzgjedhje e thënieve, vargjeve dhe haditheve që ky imam i shekullit
          të dytë hixhri mblodhi dhe përmendi, duke i bërë lotët shenjë të
          pendimit të sinqertë. Përfshin burime klasike dhe përkthim në gjuhën
          shqipe.
        </p>
      </header>

      <section className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
        <div className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg shadow-slate-200/70 backdrop-blur">
          <h2 className="font-display text-2xl font-semibold text-slate-900">
            Thënie të përmendura rreth lotit
          </h2>
          <p className="text-sm text-slate-600">
            Citime origjinale në arabisht, shoqëruar me transliterim dhe
            përkthim. Statusi i çdo thënieje tregon nëse ajo konsiderohet e
            sigurtë në burim ose e përcjellë si transmetim i njohur.
          </p>

          <div className="space-y-6">
            {quotes.map((quote) => (
              <article
                key={quote.id}
                className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-800">
                    {quote.title}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${
                      quote.attribution === "i sigurtë"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {quote.attribution === "i sigurtë"
                      ? "Burim i verifikuar"
                      : "Traditë e atribuar"}
                  </span>
                </div>
                <p className="font-arabic text-2xl leading-snug text-slate-900">
                  {quote.arabic}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  {quote.transliteration}
                </p>
                <p className="mt-4 text-base font-medium text-slate-700">
                  {quote.translation}
                </p>
                <p className="mt-3 text-sm text-slate-600">{quote.context}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-blue-700">
                  <a
                    href={quote.source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 font-semibold transition hover:bg-blue-100"
                  >
                    {quote.source.label}
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-6 rounded-3xl border border-blue-100 bg-blue-50/60 p-6 text-left shadow-inner backdrop-blur">
          <h3 className="font-display text-xl font-semibold text-blue-900">
            Pse lotët zënë vend qendror?
          </h3>
          <p className="text-sm leading-relaxed text-blue-900/80">
            Për Ibn al-Mubarakun, loti ishte shenjë e zemrës së gjallë. Në
            letrat që u dërgonte shokëve, ai i ftonte të ruanin një çast të
            natës për reflektim, sepse: <em>“syri që nuk qan, zemra që nuk
            frikësohet dhe veshët që nuk dëgjojnë të vërtetën”</em> janë shenja
            të ngurtësimit shpirtëror.
          </p>
          <div className="rounded-2xl border border-blue-100 bg-white/70 p-5 text-sm text-blue-900/90">
            <p className="font-semibold uppercase tracking-wide text-blue-600">
              Kujtesë praktike
            </p>
            <ul className="mt-3 space-y-2">
              <li>• Çast i shkurtër në fund të natës për stërvitje të zemrës.</li>
              <li>• Lexo me zë të ulët hadithet mbi lotin dhe përsëriti.</li>
              <li>• Loti lidhet me njohjen e dobësisë dhe shpresën te mëshira.</li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg shadow-slate-200/70 backdrop-blur">
        <h2 className="font-display text-2xl font-semibold text-slate-900">
          Poezia e natës: rreshta që frymëzojnë lotët
        </h2>
        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6">
          <p className="font-arabic text-2xl leading-loose text-slate-900">
            {`إِذَا مَا اللَّيْلُ أَظْلَمَ كَابَدُوهُ · وَيُسْفِرُ عَنْهُمْ وَهُمْ رُكُوعُ`}
            <br />
            {`أَطَارَ الْخَوْفُ نَوْمَهُمْ فَقَامُوا · وَأَهْلُ الْأَمْنِ فِي الدُّنْيَا هُجُوعُ`}
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Poema përshkruan shokët e natës të cilët i rezistojnë gjumit. Frika
            (khawf) i çon tek loti, ndërsa siguria e rreme i lë të fjetur.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-100">
            <span>Lexo poetikën e plotë</span>
            <a
              href="https://ar.wikisource.org/wiki/%D8%A5%D8%B0%D8%A7_%D9%85%D8%A7_%D8%A7%D9%84%D9%84%D9%8A%D9%84_%D8%A3%D8%B8%D9%84%D9%85_%D9%83%D8%A7%D8%A8%D8%AF%D9%88%D9%87"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-slate-300 decoration-dotted underline-offset-4"
            >
              Wikisource
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg shadow-slate-200/70 backdrop-blur">
        <h2 className="font-display text-2xl font-semibold text-slate-900">
          Hadithe dhe transmetime që ai theksoi
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {narrations.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-800">
                {item.label}
              </h3>
              <p className="mt-3 font-arabic text-xl text-slate-900">
                {item.arabic}
              </p>
              <p className="mt-2 text-sm text-slate-500">{item.translation}</p>
              <p className="mt-3 flex-1 text-sm text-slate-600">{item.details}</p>
              <a
                href={item.source.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-max items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
              >
                {item.source.label}
                <span aria-hidden>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg shadow-slate-200/70 backdrop-blur">
        <h2 className="font-display text-2xl font-semibold text-slate-900">
          Përkthim i shkurtër i jetës
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {timeline.map((entry) => (
            <div
              key={entry.period}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                {entry.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-800">
                {entry.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{entry.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg shadow-slate-200/70 backdrop-blur">
        <h2 className="font-display text-xl font-semibold text-slate-900">
          Shënime burimore
        </h2>
        <ul className="space-y-3 text-sm text-slate-600">
          {footnotes.map((note) => (
            <li key={note.id} className="flex gap-3">
              <span className="font-semibold text-slate-400">[{note.id}]</span>
              <span>{note.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
