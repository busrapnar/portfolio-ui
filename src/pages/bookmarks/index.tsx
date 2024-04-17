import React from 'react'
import InformationCard from '../../components/InformationCard'
import Sponsor from '../../components/Sponsor'

type Props = {}

const Bookmarks = (props: Props) => {
  return (
    
    <div className="">
        <div className="mt-20">
            <h1 className="text-2xl">Frontend ve Tasarım alanında ürettiğim eğitim videolarının tam listesi.<br/>
                Youtube üzerinden izledikten sonra buradan işaretleyebilir ve düzenli olarak takip
                edebilirsiniz.
            </h1>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
        <InformationCard
          information="221 B"
          informationPath="https://unsplash.com/@birdilingilizce"
          title="GÖRÜNTÜLEME"
        />
        <InformationCard
          information="1 B"
          informationPath="https://unsplash.com/@birdilingilizce"
          title="INDIRME"
        />
        </div>
        <Sponsor/>
        <div className="mt-10">
            <h3 className="text-3xl leading-snug opacity-40">Son Eklenenler</h3>
            <div className="mt-5">
                <article
                        className="flex items-center gap-6 py-4 sm:py-6 md:gap-10 border-b border-b-zinc-200/60 dark:border-b-zinc-800">
                    <div className="flex grow items-center gap-4">
                        <div className="grow">
                            <h3 className="font-semibold"><a
                                    href="https://github.com/atlassian/pragmatic-drag-and-drop"
                                    className="decoration-zinc-600 visited:decoration-zinc-200 "
                                    rel="noopener noreferrer"
                                    target="_blank">atlassian/pragmatic-drag-and-drop</a></h3>
                            <p className="mt-2 opacity-80">Fast drag and drop for any experience on any tech stack
                            </p>
                            <div
                                    className="mt-2 flex items-center space-x-2 font-mono text-sm opacity-60 dark:opacity-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M3.6 9h16.8"></path>
                                    <path d="M3.6 15h16.8"></path>
                                    <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                                    <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                                </svg>
                                <span>github.com</span><span>·</span><span>1 gün önce</span>
                            </div>
                        </div>
                    </div>
                    <button type="button"
                            className="flex h-8 shrink-0 cursor-pointer items-center justify-center px-3 rounded-lg bg-zinc-100 text-sm text-zinc-500 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700"><span
                            className="flex select-none items-center gap-1 font-mono font-medium"><svg
                            xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" className="opacity-80">
                                        <path
                                                d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
                                                fill="currentColor" stroke-width="0"></path>
                                    </svg>0</span>
                    </button>
                </article>

                <article
                        className="flex items-center gap-6 py-4 sm:py-6 md:gap-10 border-b border-b-zinc-200/60 dark:border-b-zinc-800">
                    <div className="flex grow items-center gap-4">
                        <div className="grow">
                            <h3 className="font-semibold"><a
                                    href="https://www.denizcemonduygu.com/2024/04/2024-yerel-secimi-nasil-gorsellestirmeli/"
                                    className="decoration-zinc-600 visited:decoration-zinc-200 dark:visited:decoration-zinc-800"
                                    rel="noopener noreferrer" target="_blank">2024 Yerel Seçimi: Nasıl
                                Görselleştirmeli?</a></h3>
                            <div
                                    className="mt-2 flex items-center space-x-2 font-mono text-sm opacity-60 dark:opacity-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                            d="M19 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h14zm-2 12h-10l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h10l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm0 -4h-10l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h10l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm0 -4h-10l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h10l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                                            stroke-width="0" fill="currentColor"></path>
                                </svg>
                                <span>denizcemonduygu.com</span><span>·</span><span>4 gün önce</span>
                            </div>
                        </div>
                    </div>
                    <button type="button"
                            className="flex h-8 shrink-0 cursor-pointer items-center justify-center px-3 rounded-lg bg-zinc-100 text-sm text-zinc-500 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700"><span
                            className="flex select-none items-center gap-1 font-mono font-medium"><svg
                            xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" className="opacity-80">
                                        <path
                                                d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
                                                fill="currentColor" stroke-width="0"></path>
                                    </svg>2</span></button>
                </article>
            </div>
        </div>
    </div>
    

  )
}

export default Bookmarks