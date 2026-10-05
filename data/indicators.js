// Canonical partial sourced snapshot. Row: month,value,source-publication-date?,edition?,source-URL?.
(function(){
const Y='https://ycharts.com/indicators/',D='https://www.construction.com/',P='https://www.pmi.spglobal.com/Public/Home/PressRelease/';
const FX='https://www.fxstreet.com/news/united-states-sp-global-services-pmi-came-in-at-588-above-expectations-587-in-september-202610051345';
const H='https://www.ahrinet.org/sites/default/files/2026-09/July2026StatisticalRelease.pdf';
function s(id,name,group,units,threshold,source_url,rows,notes,provenance='Release coverage'){return {id,name,group,units,threshold,source_url,rows,notes,provenance}}
const months=['2016-03','2016-04','2016-05','2021-05','2021-06','2021-07','2026-06','2026-07','2026-08'];
const pairs=v=>months.map((m,i)=>[m,v[i]]);
window.INDICATORS=[
s('ism_man','ISM manufacturing PMI','PMIs','Index points',50,Y+'us_pmi',[
['2016-04',51],['2016-05',51.3],['2016-06',52.4],['2021-06',60.6],['2021-07',59.5],['2021-08',59.9],
['2026-01',52.6,'2026-02-02','final','https://www.prnewswire.com/news-releases/manufacturing-pmi-at-52-6-january-2026-ism-manufacturing-pmi-report-302675443.html'],
['2026-07',55.6],['2026-08',54.6],['2026-09',54.5,'2026-10-01','final']],
'Older observations are prior connector previews, not a complete historical CSV.','Prior Finance connector preview / release coverage'),
s('ism_srv','ISM services PMI','PMIs','Index points',50,Y+'us_ism_non_manufacturing_index',[
['2016-03',55.4],['2016-04',55.2],['2016-05',54.1],['2021-05',63.9],['2021-06',61.2],['2021-07',64],['2026-06',54],['2026-07',54.1],['2026-08',55.4],
['2026-09',54.9,'2026-10-05','final','https://www.xtb.com/int/market-analysis/news-and-research/breaking-u-s-ism-pmi-for-services-comes-in-below-expectations']],
'Sparse prior connector preview plus September release coverage.','Prior Finance connector preview / release coverage'),
s('sp_man','S&P US manufacturing PMI','PMIs','Index points',50,'https://www.mql5.com/en/economic-calendar/united-states/markit-manufacturing-pmi',[
['2026-08',53.9],['2026-09',57,'2026-09-23','flash','https://www.finlogix.com/calendar/us/sp-global-manufacturing-pmi-flash'],
['2026-09',55.9,'2026-10-01','final',P+'e5a4c30944f34cf7a4c56f85a9e01b0b']],
'Flash and final editions stay separate. Default prefers final readings.'),
s('sp_srv','S&P US services PMI','PMIs','Index points',50,'https://www.mql5.com/en/economic-calendar/united-states/markit-services-pmi',[
['2026-07',54.6],['2026-08',56.8,'2026-08-21','flash',P+'552d682e429640fcb8af7da17ad060c3'],
['2026-08',56.5,'','final',FX],['2026-09',58.7,'2026-09-23','flash','https://www.investing.com/economic-calendar/services-pmi-1062'],
['2026-09',58.8,'2026-10-05','final',FX]],
'August final is a prior-month comparator in September coverage; first-publication time is unknown.'),
s('ny','New York Fed manufacturing','Regional Fed','Diffusion index',0,Y+'empire_state_manufacturing_general_business_conditions_index',
[...pairs([-1,8,-5.3,31.9,16.7,35.8,5.7,15.6,20.6]),['2026-09',7.6]],
'Sparse connector previews; September from public history table.','Prior Finance connector preview / public history table'),
s('philly','Philadelphia Fed manufacturing','Regional Fed','Diffusion index',0,Y+'philly_fed_manufacturing_activity_index',
[...pairs([8.5,-1.9,-5.7,32.8,31.3,27.1,10.3,41.4,47.4]),['2026-09',37.8]],
'Sparse connector previews; September from public history table.','Prior Finance connector preview / public history table'),
s('richmond','Richmond Fed manufacturing','Regional Fed','Diffusion index',0,Y+'richmond_fed_manufacturing_index',
[...pairs([16,7,2,22,27,23,4,5,4]),['2026-09',-2]],
'Sparse connector previews; September from public history table.','Prior Finance connector preview / public history table'),
s('dallas','Dallas Fed business activity','Regional Fed','Diffusion index',0,Y+'texas_manufacturing_business_activity_index',[
['2016-04',-12],['2016-05',-17.1],['2016-06',-17.2],['2021-05',36.8],['2021-06',31.8],['2021-07',28.8],['2026-06',0],['2026-07',1.3],['2026-08',11.6],['2026-09',9.8]],
'General business activity, not the production index. Sparse previews.','Prior Finance connector preview / public history table'),
s('kc','Kansas City Fed composite','Regional Fed','Diffusion index',0,'https://www.kansascityfed.org/surveys/manufacturing-survey/tenth-district-manufacturing-activity-continued-to-increase-in-september-2026/',
[['2026-07',9],['2026-08',10],['2026-09',14,'2026-09-24']],
'Headline composite, not Kansas City production. Earlier months are comparators in September coverage.'),
s('dmi','Dodge Momentum Index','Construction','Index; 2000=100',null,D+'dodge-momentum-index-flat-in-august/',[
['2025-12',296.8,'2026-01-08','original',D+'dodge-momentum-index-grows-7-in-december/'],
['2026-01',272.7,'2026-02-06','original',D+'dodge-momentum-index-declines-6-in-january/'],
['2026-03',250.5,'2026-04-07','original',D+'dodge-momentum-index-grows-2-in-march/'],
['2026-05',277.1,'2026-07-08','revised',D+'dodge-momentum-index-slows-2-in-june/'],
['2026-06',271.7,'2026-07-08','original',D+'dodge-momentum-index-slows-2-in-june/'],
['2026-06',273,'2026-08-06','revised',D+'dodge-momentum-index-improves-7-in-july/'],
['2026-07',291.7,'2026-08-06','original',D+'dodge-momentum-index-improves-7-in-july/'],
['2026-07',283,'2026-09-08','revised'],['2026-08',282,'2026-09-08','original']],
'Preserves original/revised readings; February and April are not loaded.'),
s('abi','AIA Architecture Billings Index','Construction','Diffusion index',50,'https://www.aia.org/resource-center/abi-august-2026-architecture-firm-billings-continue-decline',[
['2026-01',43.8,'2026-02-18','reported','https://www.architectmagazine.com/design/the-architecture-billings-index-sounds-an-alarm/'],
['2026-02',49.4,'2026-03-18','reported','https://calculatedrisk.substack.com/p/architecture-billings-declined-slightly'],
['2026-03',49.8,'2026-05-20','prior-month comparator','https://www.aia.org/resource-center/abi-april-2026-architecture-firm-billings-retreat'],
['2026-04',48.3,'2026-05-20','reported','https://www.aia.org/resource-center/abi-april-2026-architecture-firm-billings-retreat'],
['2026-05',44.5,'2026-07-01','reported','https://residentialdesignmagazine.com/abi-may-2026-architecture-firm-billings-weaken-further/'],
['2026-06',47.3,'2026-07-22','reported','https://www.aia.org/resource-center/abi-june-2026-billings-remain-weak-architecture-firms'],
['2026-07',46.6,'2026-08-19','reported','https://www.aia.org/resource-center/abi-july-2026-architecture-firm-billings-remain-weak'],
['2026-08',47.2,'2026-09-23','reported']],
'Some publication dates are secondary coverage, not certified first releases.'),
s('nfib','NFIB small-business optimism','Business sentiment','Index points',null,Y+'small_business_optimism_index',pairs([92.6,93.6,93.8,99.6,102.5,99.7,97.4,99.8,98.7]),
'Sparse connector preview, not continuous history.','Prior Finance connector preview'),
s('starts','US housing starts','Construction','Thousand units; SAAR',null,Y+'housing_starts',pairs([1111,1163,1148,1589,1650,1597,1439,1309,1275]),
'Housing-unit starts at annual rate, not Dodge construction-start dollars.','Prior Finance connector preview'),
s('hvac_all','AHRI combined AC + heat pumps','HVAC','Units shipped; not SA',null,H,[
['2026-01',440819,'2026-04-01','reported','https://iifiir.org/en/news/united-states-january-2026-heating-and-cooling-equipment-shipment-data'],
['2026-02',638841,'2026-05-05','reported','https://iifiir.org/en/news/united-states-february-2026-heating-and-cooling-equipment-shipment-data'],
['2026-03',856674,'2026-06-03','reported','https://iifiir.org/en/news/united-states-march-2026-heating-and-cooling-equipment-shipment-data'],
['2026-05',919685,'2026-08-10','reported','https://iifiir.org/en/news/united-states-may-2026-heating-and-cooling-equipment-shipment-data'],
['2026-07',916830,'2026-09-11']],
'Includes both components; do not double count. Coverage dates may be later than official release.'),
s('hvac_ac','AHRI central air conditioners','HVAC','Units shipped; not SA',null,H,[['2026-07',503151,'2026-09-11']], 'One verified observation; no historical line fabricated.'),
s('hvac_hp','AHRI air-source heat pumps','HVAC','Units shipped; not SA',null,H,[['2026-07',413679,'2026-09-11']], 'One verified observation; no historical line fabricated.'),
s('hvac_furnace','AHRI gas furnaces','HVAC','Units shipped; not SA',null,H,[['2026-07',265810,'2026-09-11']], 'One verified observation; no historical line fabricated.')
];
})();
