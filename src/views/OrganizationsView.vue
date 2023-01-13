<template>
    <div class="container py-4 py-xl-5">
        <div class="row mb-5">
            <div class="col-md-8 col-xl-6 text-center mx-auto">
                <h2>Organizacije članice</h2>
                <p class="w-lg-50">Upoznajte Organizacije članice Vijeća mladih Općine Novo Sarajevo</p>
            </div>
        </div>
        <div v-for="organizacija in organizacije" class="row mb-5 align-items-center">
            <div class="col-4">
                    <img :src="require('../assets/img/logotipovi/'+organizacija.logo)" :alt="organizacija.title" class="img-fluid w-50">
            </div>
            <div class="col-8">
                <h3>{{organizacija.title}}</h3>
                <p class="font-weight-light poravnanje">{{organizacija.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            organizacije : [
                {
                    title: "Udruženje za razvoj i podršku mladih Plus Ultra",
                    logo: "plusultra.jpg",
                    description: "Udruženje Plus Ultra je pokrenuto 2021. godine inicijativom osoba koje su kroz vlastita iskustva prepoznali da formalno obrazovanje ne nudi vještine koje su potrebne za pronalazak stalnog i stabilnog zaposlenja. Plus Ultra je formiran u zamisli realizacije „mladi za mlade“, te je u potpunosti vođena mladim osobama. Od januara do juna 2021. godine, grupa od 5 mladih ljudi je, kao neformalna grupa mladih Plus Ultra, implementirala projekat pod nazivom “Škola programiranja Plus Ultra”. S obzirom da se IT sektor u BiH smatra veoma perspektivnim, projekat je imao za cilj da osnaži mlade ljude i ponudi im kvalitetan dodatak njihovom srednjoškolskom obrazovanju, te doprinese suzbijanju stereotipa da je programiranje teško i bauk. Krajnja misao svega toga je bila da mladi, tako što se upuste u IT industriju lakše dođu do posla. Nakon uspješnosti pomenutog projekta, koji je dokazao da u društvu postoji velika potreba za aktivnostima koje pružaju podršku mladima, članovi neformalne grupe su napisali projektni prijedlog za BOLD program malih grantova te unutar projektnog prijedloga predvidjeli osnivanje Udruženja kao dugoročnog mehanizma pružanja podrške mladima. Kako bi ta podrška bila istinska i relevantna, strateški je odlučeno da Udruženje bude omladinsko, odnosno da upravljačke strukture čine mladi, koji će da kroz svoj rad kreiraju podsticajno okruženje za druge."
                },
                {
                    title: "Udruženje studenata elektrotehnike Evrope, Lokalni komitet Sarajevo",
                    subtitle: "EESTEC LC Sarajevo",
                    logo: "eesteclcsarajevo.jpg",
                    description: "EESTEC (engl. Electrical Engineering STudents' European assoCiation – EESTEC) je udruženje studenata elektrotehnike Evrope. Udruženje je osnovano 1986. godine u Eindhovenu, Nizozemskoj. Osnovni cilj EESTEC-a je promocija i razvoj međunarodnih kontakata između studenata i profesionalaca u oblasti elektrotehnike. Također, razmjena ideja i iskustava iz oblasti elektrotehnike i kompjuterskih nauka te unapređenje tehničkog znanja studenata elektrotehnike omogućeno je kroz: stručne radionice, razmjene, stručne prakse i ostale aktivnosti. EESTEC pruža poslovne mogućnosti i internacionalnu karijeru svim članovima lokalnih komiteta, a jedan od koraka koji idu ka ostvarenju ovog cilja je formiranje jedinstvene baze podataka studenata elektrotehnike iz cijele Evrope, kako bi internacionalne kompanije mogle lakše pronaći i specijalizirati studente u vrhunske inženjere kroz rad u njihovom poslovnom okruženju. Kao jedan od respektabilnijih i aktivnijih lokalnih komiteta u sklopu EESTEC Internationala, LC Sarajevo se može pohvaliti velikim brojem organizovanih projekata, kako na lokalnom nivou, tako i na internacionalnom. EESTEC se trudi svake godine da organizuje što veći broj visokokvalitetnih projekata koji studentima pomažu da razviju svoje društvene i profesionalne sposobnosti, ali i da upoznaju studente i ugledne poslovne ljude iz cijele Evrope."
                },
                {
                    title: "Youth for peace",
                    description: "Youth for Peace su osnovali i vode mladi ljudi koji su stekli iskustvo dugogodišnjim djelovanjem u nevladinom sektoru radeći s mladima. Dolaze iz različitih etničkih i religijskih skupina, koje su vrlo često bile sukobljene strane u prošlosti. Svoju snagu crpe iz želje za održivim zajedničkim suživotom u istoj zemlji, organizirajući brojne aktivnosti za mlade prenose i na njih svoje iskustvo dijaloga i suživota. Rad organizacije se bazira na prenošenju iskustva, davanju pozitivnog primjera, te širenju duha zajedništva među mladima. Misija i glavni ciljevi organizacije su usmjereni ka okupljanju mladih, edukaciji i poticanju na aktivizam. Iz dosadašnjeg iskustva očigledno je da mladi različitih etničkih i religijskih skupina širom Bosne i Hercegovine nemaju priliku da se susretnu, druže, razgovaraju, uče jedni od drugih, razmjenjuju životna iskustva i probleme, niti imaju ikakve zajedničke aktivnosti.Edukacije koje Youth for Peace nudi mladima u BiH su usmjerene ka mapiranju sličnosti i različitosti, pronalasku vrijednosti koje su svima zajedničke, te razgovore o onim temama koje nas diferenciraju. Mladi se educiraju kako komunicirati uvažavajući druge, i njihove potrebe; različita perspektiva često može pomoći u boljem razumijevanju drugoga. Radionice su interaktivnog karaktera, moderirane od strane trenera Organizacije, koji su svoje licence dobili na treninzima u BiH i izvan, te iskustvo stekli u dugogodišnjem radu s mladima.",
                    logo: "yfp.jpg"
                },
                {
                    title: "Hrvački klub “Željezničar”",
                    logo: "hkzeljo.jpg",
                    description: "Misija Hrvačkog kluba Željezničar jeste da u budućnosti stvori što kvalitetnije takmičare koji bi ostvarivali zapažene rezultate na međunarodnom nivou, što je jedan i od razloga postojanja Hrvačkog kluba Željezničar. Osnovna svrha kluba je promidžba bavljenjem hrvanjem kao primarnim sportom i zdravog načina življenja. Vizija Hrvačkog kluba Željezničar jeste da razvija predvidivu budućnost koja se sastoji od tog da se predvide i ostvare ciljevi u realnom vremenskom roku. U budućnosti vide klub sa mnogo istaknutih pojedinaca u ovom sportu, te da klub zauzme važno mjesto u ovom sportu. Treninzi se održavaju svake sedmice, ponedjeljak srijeda i petak od 16:00h."
                },
                {
                    title:"Udruženje Judo klub \"OLIMP\"",
                    logo: "jkolimp.jpg",
                    description: "Misija Udruženja jeste okupljanje što većeg broja mladih i njihovo osposobljavanje i sportsko usavršavanje Judo vještinama - tehnikama bacanja, tehnika zahvata i gušenja kroz trenažnu djelatnost i sportsko rekreativne aktivnosti. Rade na socijalizaciji mladih kroz sportsko-rekreacione aktivnosti koje će dovesti do stvaranja sigurnijeg, miroljubljivijeg i tolerantnijeg okruženja. Pored toga, bave se radom sa mladim kroz edukativno-kreativne radionice u oblasti nutricionizma, zdrave i prihvatljive odnosno preporučljive ishrane za mlade, a naročito za mlade sportaše. Kroz projektne aktivnosti u okviru projekata na različitim nivoima rade sa mladima u oblasti prevencije maloljetničkog prestupništva, vršnjačkog nasilja itd. Vizija UJK \"OLIMP\" je prije svega edukacija kroz sport i sportsko-rekreativne aktivnosti, koje za cilj imaju njegovanje pozitivnih vrijednosti i stvaranje što boljih pretpostavki za pravilan rast i razvoj mladih. Buđenje svijesti u široj društvenoj zajednici o važnosti i značaju bavljenja sportom, o sportu kao sportsko-okupacionoj terapiji koja može dovesti do povećanja kvaliteta života djece roditelja i šire društvene zajednice.Kad je sportski aspekt u pitanju onda potencijalno nove članove, te trenutne članove najčešće motiviše to što je Judo klub \"OLIMP\" trenutno jedan od najmasovnijih sportski kolektiva u Kantonu Sarajevo, čiji članovi ostvaruju zaista zapažene rezultate i gdje trenutno trenira nekoliko reprezentativaca Bosne i Hercegovine."
                },
                {
                    title: "Karate klub “RESPECT”",
                    logo: "kkrespect.jpg",
                    description: "Karate klub \"Respect\" Sarajevo je osnovan 29.09.2015. godine. Klub je osnovan sa ciljem da prioritet karate sporta mora biti kvalitet ove vještine a ne kvantitet! Kvalitet ističu jer višegodišnje iskustvo predsjednika kluba (Nermin Potur) kao takmičara sa odličjima osvojenim na balkanskim, mediteranskim, evropskim i svjetskim takmičenjima su njegov podstrek u ostvarenju spomenutog cilja za nove generacije djece i omladine koji žele da karate uključe u svoj sportski život. Djeca su njihov svijet i za njih žive, a čuvajući djecu čuvaju svoj svijet. Treneri kluba (Teodora Perić, Haris Macanović, Jasmin Husejinović i Adis Murto) dosežu do srca djece s ciljem da im omoguće najbolji način za treniranje, da razviju motoričke sposobnosti kao i fizičku snagu.Fokus u narednom periodu im je na pripremi članova/takmičara za predstojeća domaća i inostrana takmičenja u svim kategorijama, priprema članova za sticanje novih učeničkih zvanja, redovni upis novih članova, održavanje ljetnih i zimskih klupskih priprema i organizacija jednog od najjačih turnira na Balkanu \"GRAND PRIX SARAJEVO & TOP TEN\". Klub je u proteklom periodu (7 godina) osvojio preko 800 medalja!"

                },
                {
                    title: "Omladinska razvojna asocijacija",
                    logo: "ora.jpg",
                    description: "Omladinska razvojna asocijacija je osnovana 2020. godine s ciljem promocije i nadogradnje vještina i sposobnosti mladih ljudi potrebnih za uspješan razvoj karijere i cjeloživotnih vrijednosti. Omladinska razvojna asocijacija svoje ciljeve sprovodi kroz različite aktivnosti i to: 1.  Rad na organizaciji aktivnosti u oblastima neformalne edukacije mladih, međunarodnih odnosa, obrazovanja, kulture, politike i zaštite životne sredine; 2. Rad na uklanjanju predrasuda o međunacionalnoj, etničkoj i religijskoj netrpeljivosti kroz zalaganje za postavljanje zdravih temelja odgoja omladine, uz aktivnu promociju mirovnjačkih principa;  3. Rad na organizaciji aktivnosti vezanih za medijsku i informacijsku pismenost, te ličnu sigurnost na digitalnim mrežama; 4. Podrška osposobljavanju mladih osoba za proces nadogradnje ličnih kompetencija i izgradnju psihofizički stabilne ličnosti; 5. Promocija ideje ostanka mladih u Bosni i Hercegovini i doprinosa lokalnoj zajednici; 6. Saradnja sa drugim organizacijama u zemlji i inozemstvu radi efikasnijeg ostvarivanja ciljeva i djelatnosti Udruženja."
                },
            ]
        }

    }
}
</script>