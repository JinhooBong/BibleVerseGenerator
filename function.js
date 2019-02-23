const time = document.getElementById("time");
const date = document.getElementById("date");
var verses = [
    'But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.',
    'Therefore encourage one another and build one another up, just as you are doing.',
    'When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you.',
    'Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.',
    'It is the Lord who goes before you. He will be with you; he will not leave you or forsake you. Do not fear or be dismayed.',
    'Come to me, all who labor and are heavy laden, and I will give you rest.',
    'Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God.',
    'Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.',
    'I lift up my eyes to the hills. From where does my help come? My help comes from the Lord, who made heaven and earth.',
    'And let us consider how to stir up one another to love and good workds, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near.',
    'I will instruct you and teach you in the way you should go; I will counsel you with my eye upon you.',
    'Be strong, and let your heart take courage, all you who wait for the Lord!',
    'I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.',
    'Be watchful, stand firm in the faith, act like men, be strong.',
    'Because you are precious in my eyes, and honored, and I love you, I give men in return for you, peoples in exchange for your life.',
    'In all toil there is profit, but mere talk tends only to poverty.',
    'Even though I walkt through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.', 
    'Peace I leave with you; my peace I give it to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.',
    'For this light momentary affliction is prearing for us an eternal weight of glory beyond all comparison.',
    'Whan then shall we say to these things? If God is for us, who can be against us?',
    'May the God of endurance and encouragement grant you to live in such harmoney with one another, in accord with Christ Jesus.',
    'Let the favor of the Lord our God be upon us, and establish the work of our hands upon us; yes, establish the work of our hands!',
    'Let each of us please his neighbor for his good, to build him up.',
    'For if the readiness is there, it is acceptable according to what a person has, not according to what he does not have.',
    'Are not five sparrows sold for two pennies? And not one of them is forgotten before God. Why, even the hairs of your head are all numbered. Fear not; you are of more value than many sparrows.',
    'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day.',
    'I, I am he who comforts you; who are you that you are afraid of man who dies, of the son of man who is made like grass.',
    'They shall hunger no more, neither thirst anymore; the sun shall not strike them, nor any scorching heat. For the Lamb in the midst of the throne will be their shepherd, and he will guide them to springs of living water, and God will wipe away every tear from their eyes.',
    'For as we share abundantly in Christ\'s sufferings, so through Christ we share abundantly in comfort too.',
    'That their hearts may be encouraged, being knit together in love, to reach all the riches of full assurance of understanding and the knowledge of God\'s mystery, which is Christ.',
    'For I long to see you, that I may impart to you some spiritual gift to strengthen you - that is, that we may be mutually encouraged by each other\'s faith, both yours and mine.',
    'Whatever you do, work heartily, as for the Lord and not for men.',
    'Whatever your hand finds to do, do it with all your might.',
    'Love is patient and kind, love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things.'
]

var book = [
    'Isaiah 40:31 ESV', '1 Thessalonians 5:11 ESV', 'Isaiah 43:2', 'Joshua 1:9 ESV', 'Deuteronomy 31:8', 'Matthew 11:28 ESV', '2 Corinthians 1:3-4 ESV', '1 Corinthians 15:58 ESV', 'Psalm 121:1-2 ESV', 'Hebrews 10:24-25 ESV', 'Psalm 32:8 ESV', 'Psalm 31:24 ESV', 'John 16:33 ESV', '1 Corinthians 16:13 ESV',  'Isaiah 43:4 ESV', 'Proverbs 14:23 ESV', 'Psalm 23:4 ESV', 'John 14:27 ESV', '2 Corinthians 4:17 ESV', 'Romans 8:31 ESV', 'Romans 15:5 ESV', 'Psalm 90:17 ESV', 'Romans 15:2 ESV', '2 Corinthians 8:12 ESV', 'Luke 12:6-7 ESV', '2 Corinthians 4:16 ESV', 'Isaiah 51:12 ESV', 'Revelation 7:16-17 ESV', '2 Corinthians 1:5 ESV', 'Colossians 2:2 ESV', 'Romans 1:11-12 ESV', 'Colossians 3:23 ESV', 'Ecclesiastes 9:10 ESV', '1 Corinthians 13:4-7'
]

var today = new Date();
var currDate = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();

var currTime;

function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    var t_str;
    if(hours > 11) {
        hours = hours - 12;
        t_str = hours + ":" + minutes + " PM";
    } else {
        t_str = hours + ":" + minutes + " AM";
    }
    time.innerHTML = t_str;
}
setInterval(updateTime, 1000);
date.innerHTML = currDate;

var verseNum = Math.floor(Math.random() * (verses.length));
document.getElementById("quoteDisplay").innerHTML = '" ' + verses[verseNum] + ' "'; 
document.getElementById("bookDisplay").innerHTML = "- " + book[verseNum];