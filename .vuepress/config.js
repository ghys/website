const base = process.env.GH ? '/vuepress/' : '/'

module.exports = {
  title: 'openHAB',
  description: 'openHAB - a vendor and technology agnostic open source automation software for your home',
  dest: 'vuepress',
  host: 'localhost',
  base,
  head: [
    ['link', { rel: 'icon', href: `/openhab-logo-square.png` }],
    ['link', { rel: 'stylesheet', href: `//fonts.googleapis.com/css?family=Open+Sans:300,400` }]
    ['script', { src: `https://identity.netlify.com/v1/netlify-identity-widget.js` }]
    ['script', { src: `https://cookieinfoscript.com/js/cookieinfo.min.js` }]
  ],
  serviceWorker: false,
  themeConfig: {
    logo: `/openhab-logo-top.png`,
    repo: 'openhab',
    editLinks: false,
    docsDir: 'docs',
    nav: [
      {
        text: 'Blog',
        link: '/blog/'
      },
      {
        text: 'Download',
        link: '/download/',
      },
      {
        text: 'Docs',
        link: '/docs/',
      },
      {
        text: 'Add-ons',
        link: '/addons/'
      },
      {
        text: 'About',
        items: [
          {
            text: 'Community',
            items: [
              {
                text: 'Who We Are',
                link: '/about/who-we-are',
              },
              {
                text: 'Forum & FAQ',
                link: '/about/community'
              },
              {
                text: 'Contribute',
                link: '/about/contributing'
              },
              {
                text: 'Events',
                link: '/about/events'
              },
            ]
          },
          {
            text: 'Support openHAB',
            items: [
              {
                text: 'Foundation',
                link: 'https://openhabfoundation.org/'
              },
              {
                text: 'Donate',
                link: '/about/donate'
              }
            ]
          },
          {
            text: 'Resources',
            items: [
              {
                text: 'Press',
                link: '/about/press'
              },
              {
                text: 'Academia',
                link: '/about/education'
              },
              {
                text: 'Success Stories',
                link: '/about/showcase'
              },
              {
                text: 'Logos',
                link: '/about/logos'
              },
              // {
              //   text: 'Privacy',
              //   link: '/privacy'
              // }
            ]
          }
        ]
      },
      // {
      //   text: 'myopenHAB',
      //   link: '/myopenhab/'
      // }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Welcome to openHAB',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Concepts',
          collapsable: false,
          children: [
            ['concepts/', 'Concepts Overview'],
            'concepts/things',
            'concepts/items',
            'concepts/discovery',
            'concepts/audio',
          ]
        },
        {
          title: 'Installation Guide',
          collapsable: false,
          children: [
            'installation/',
            ['installation/linux', 'Linux'],
            ['installation/windows', 'Windows'],
            ['installation/macosx', 'macOS'],
            'installation/openhabian',
            'installation/rasppi',
            'installation/pine',
            'installation/docker',
            'installation/synology',
            'installation/qnap',
            ['installation/security', 'Security']
          ]
        },
        {
          title: 'New User Tutorial',
          collapsable: false,
          children: [
            ['tutorial/', 'Tutorial Overview'],
            'tutorial/1sttimesetup',
            'tutorial/uis',
            'tutorial/configuration',
            'tutorial/sitemap',
            'tutorial/rules',
            'tutorial/logs',
            'tutorial/persistence'
          ]
        },
        {
          title: 'Configuration Guide',
          collapsable: false,
          children: [
            ['configuration/', 'Configuration Overview'],
            'configuration/things',
            'configuration/items',
            'configuration/sitemaps',
            'configuration/persistence',
            'configuration/rules-dsl',
            'configuration/transformations',
            'configuration/actions',
            'configuration/jsr223',
            'configuration/services',
            'configuration/multimedia',
            ['configuration/migration/', 'Migration from 1.x']
          ]
        },
        {
          title: 'User Interfaces and Apps',
          collapsable: false,
          children: [
            'configuration/packages',
            'configuration/editors',
            'configuration/homebuilder',
            ['configuration/paperui', 'Paper UI'],
            ['configuration/habmin', 'HABmin'],
            'configuration/habpanel',
            'configuration/rules-ng',
            'apps/android',
            'apps/ios',
            'apps/windows',
          ]
        },
        {
          title: 'Administration Guide',
          collapsable: false,
          children: [
            'administration/',
            'administration/console',
            'administration/runtime',
            'administration/bundles',
            'administration/logging',
            'administration/jsondb',
          ]
        },
      ],
      '/guides/': [
        {
          title: 'Welcome to openHAB',
          collapsable: false,
          children: [
            'overview/',
            'overview/concepts',
            // 'installation',
            // 'tutorial',
            // 'migrating',
            // 'configuration',
            // 'user-interfaces',
            // 'administration',
            // 'community'
          ]
        },
        {
          title: 'Installation Guide',
          collapsable: false,
          children: [
            'installation/',
            ['installation/linux', 'Linux'],
            ['installation/windows', 'Windows'],
            ['installation/macosx', 'macOS'],
            'installation/openhabian',
            'installation/rasppi',
            'installation/pine',
            'installation/docker',
            'installation/synology',
            'installation/qnap',
            ['installation/security', 'Security']
          ]
        },
        {
          title: 'New User Tutorial',
          collapsable: false,
          children: [
            'tutorial/',
            'tutorial/1sttimesetup',
            'tutorial/uis',
            'tutorial/configuration',
            'tutorial/sitemap',
            'tutorial/rules',
            'tutorial/logs',
            'tutorial/persistence'
          ]
        },
        {
          title: 'Configuration Guide',
          collapsable: false,
          children: [
            'configuration/',
            'configuration/things',
            'configuration/items',
            'configuration/sitemaps',
            ['configuration/transform', 'Transformations'],
            'configuration/persistence',
            'configuration/rules-dsl',
            'configuration/rules-ng',
            'configuration/jsr223',
            'configuration/services',
            'configuration/multimedia',
            ['migration/', 'Migration from 1.x']
          ]
        },
        {
          title: 'User Interfaces',
          collapsable: false,
          children: [
            'configuration/packages',
            'configuration/homebuilder',
            'configuration/paperui',
            'configuration/habmin',
            'configuration/habpanel',
            'configuration/rules-ng',
            'configuration/editors',
          ]
        },
        {
          title: 'Administration Guide',
          collapsable: false,
          children: [
            'administration/',
            'administration/console',
            'administration/runtime',
            'administration/bundles',
            'administration/logging',
            'administration/jsondb',
          ]
        },
        {
          title: 'Developer Guide',
          collapsable: false,
          children: [
            'developer/',
            'developer/contributing',
            'developer/prerequisites',
            'developer/basics',
            'developer/migrating',
          ]
        }
      ],
      '/addons/': [
        {
          title: 'Bindings',
          collapsible: false,
          children: [
            ['bindings/airquality/', 'Air Quality'],
            ['bindings/akm8681/', 'AKM868 (1.x)'],
            ['bindings/alarmdecoder1/', 'Alarm Decoder (1.x)'],
            ['bindings/allplay/', 'AllPlay'],
            ['bindings/amazondashbutton/', 'Amazon Dash Button'],
            ['bindings/anel1/', 'Anel NET-PwrCtrl (1.x)'],
            ['bindings/asterisk1/', 'Asterisk (1.x)'],
            ['bindings/astro/', 'Astro'],
            ['bindings/astro1/', 'Astro (1.x)'],
            ['bindings/atlona/', 'Atlona'],
            ['bindings/autelis/', 'Autelis Pool Control'],
            ['bindings/autelis1/', 'Autelis (1.x)'],
            ['bindings/avmfritz/', 'AVM FRITZ!'],
            ['bindings/benqprojector1/', 'BenQ Projector (1.x)'],
            ['bindings/bigassfan/', 'BigAssFan'],
            ['bindings/bluetooth/', 'Bluetooth'],
            ['bindings/bluetooth.bluez/', 'Bluetooth BlueZ Adapter'],
            ['bindings/bluetooth1/', 'Bluetooth (1.x)'],
            ['bindings/boschindego/', 'Bosch Indego'],
            ['bindings/bticino1/', 'Bticino (1.x)'],
            ['bindings/caldav-command1/', 'CalDAV Command (1.x)'],
            ['bindings/caldav-personal1/', 'CalDAV Personal (1.x)'],
            ['bindings/chromecast/', 'Chromecast'],
            ['bindings/cm11a/', 'Cm11a (X10 controller)'],
            ['bindings/comfoair1/', 'ComfoAir (1.x)'],
            ['bindings/configadmin1/', 'ConfigAdmin (1.x)'],
            ['bindings/coolmasternet/', 'CoolMasterNet'],
            ['bindings/cups1/', 'CUPS (1.x)'],
            ['bindings/daikin1/', 'Daikin (1.x)'],
            ['bindings/davis1/', 'Davis (1.x)'],
            ['bindings/ddwrt1/', 'DD-WRT (1.x)'],
            ['bindings/denon1/', 'Denon (1.x)'],
            ['bindings/digitalstrom/', 'digitalSTROM'],
            ['bindings/digitalstrom1/', 'digitalSTROM (1.x)'],
            ['bindings/diyonxbee1/', 'DIYOnXBee (1.x)'],
            ['bindings/dlinksmarthome/', 'D-Link Smart Home'],
            ['bindings/dmx/', 'DMX'],
            ['bindings/dmx1/', 'DMX (1.x)'],
            ['bindings/dscalarm/', 'DSC Alarm'],
            ['bindings/dscalarm1/', 'DSC PowerSeries Alarm System (1.x)'],
            ['bindings/dsmr1/', 'DSMR (1.x)'],
            ['bindings/ebus1/', 'eBUS (1.x)'],
            ['bindings/ecobee1/', 'Ecobee (1.x)'],
            ['bindings/ecotouch1/', 'EcoTouch (1.x)'],
            ['bindings/ekey1/', 'ekey (1.x)'],
            ['bindings/energenie1/', 'Energenie (1.x)'],
            ['bindings/enocean1/', 'EnOcean (1.x)'],
            ['bindings/enphaseenergy1/', 'Enphase Energy (1.x)'],
            ['bindings/epsonprojector1/', 'Epson Projector (1.x)'],
            ['bindings/exec/', 'Exec'],
            ['bindings/exec1/', 'Exec (1.x)'],
            ['bindings/expire1/', 'Expire (1.x)'],
            ['bindings/fatekplc1/', 'Fatek PLC (1.x)'],
            ['bindings/feed/', 'Feed'],
            ['bindings/feican/', 'Feican'],
            ['bindings/fht1/', 'FHT (1.x)'],
            ['bindings/folding/', 'Folding@home'],
            ['bindings/freebox/', 'Freebox'],
            ['bindings/freebox1/', 'Freebox (1.x)'],
            ['bindings/freeswitch1/', 'FreeSWITCH (1.x)'],
            ['bindings/fritzaha1/', 'Fritz AHA (1.x)'],
            ['bindings/fritzbox1/', 'Fritz!Box (1.x)'],
            ['bindings/fritzboxtr0641/', 'Fritzbox (using TR064 protocol) (1.x)'],
            ['bindings/fronius/', 'Fronius'],
            ['bindings/frontiersiliconradio1/', 'Frontier Silicon Radio (1.x)'],
            ['bindings/fs201/', 'FS20 (1.x)'],
            ['bindings/fsinternetradio/', 'FS Internet Radio'],
            ['bindings/garadget1/', 'Garadget (1.x)'],
            ['bindings/gardena/', 'Gardena'],
            ['bindings/gc100ir1/', 'Global Cache IR (1.x)'],
            ['bindings/globalcache/', 'GlobalCache'],
            ['bindings/gpio1/', 'GPIO (1.x)'],
            ['bindings/harmonyhub/', 'Logitech Harmony Hub'],
            ['bindings/harmonyhub1/', 'Harmony Hub (1.x)'],
            ['bindings/hdanywhere/', 'HDanywhere'],
            ['bindings/hdanywhere1/', 'HDanywhere (1.x)'],
            ['bindings/hdpowerview/', 'Hunter Douglas PowerView'],
            ['bindings/heatmiser1/', 'Heatmiser (1.x)'],
            ['bindings/helios/', 'Helios'],
            ['bindings/hms1/', 'HMS (1.x)'],
            ['bindings/homematic/', 'Homematic'],
            ['bindings/homematic1/', 'Homematic (1.x)'],
            ['bindings/horizon1/', 'Horizon mediabox (1.x)'],
            ['bindings/http1/', 'HTTP (1.x)'],
            ['bindings/hue/', 'Philips Hue'],
            ['bindings/hue1/', 'Hue (1.x)'],
            ['bindings/icloud/', 'iCloud'],
            ['bindings/iec6205621meter1/', 'IEC 62056-21 Meter (1.x)'],
            ['bindings/ihc1/', 'IHC / ELKO (1.x)'],
            ['bindings/innogysmarthome/', 'innogy SmartHome'],
            ['bindings/insteonhub1/', 'Insteon Hub (1.x)'],
            ['bindings/insteonplm1/', 'Insteon PLM (1.x)'],
            ['bindings/intertechno1/', 'Intertechno (1.x)'],
            ['bindings/ipp/', 'IPP'],
            ['bindings/ipx8001/', 'IPX800 (1.x)'],
            ['bindings/irtrans/', 'IRtrans'],
            ['bindings/irtrans1/', 'IRTrans (1.x)'],
            ['bindings/isy1/', 'ISY (1.x)'],
            ['bindings/jeelink/', 'Jeelink'],
            ['bindings/jointspace1/', 'jointSPACE (1.x)'],
            ['bindings/k80551/', 'Velleman k8055 USB IO Board (1.x)'],
            ['bindings/keba/', 'Keba'],
            ['bindings/km2001/', 'KM200 (1.x)'],
            ['bindings/knx/', 'KNX'],
            ['bindings/knx1/', 'KNX (1.x)'],
            ['bindings/kodi/', 'Kodi'],
            ['bindings/kostalinverter/', 'Kostal Inverter'],
            ['bindings/koubachi1/', 'Koubachi (1.x)'],
            ['bindings/lametrictime/', 'LaMetric'],
            ['bindings/lcn1/', 'LCN (1.x)'],
            ['bindings/lgtv1/', 'LG TV (1.x)'],
            ['bindings/lgtvserial/', 'LG TV control using serial protocol'],
            ['bindings/lgwebos/', 'LG webOS'],
            ['bindings/lifx/', 'LIFX'],
            ['bindings/lightwaverf1/', 'LightwaveRF (1.x)'],
            ['bindings/lirc/', 'LIRC'],
            ['bindings/loxone/', 'Loxone'],
            ['bindings/lutron/', 'Lutron'],
            ['bindings/mailcontrol1/', 'MailControl (1.x)'],
            ['bindings/max/', 'MAX!'],
            ['bindings/maxcube1/', 'MAX!Cube (1.x)'],
            ['bindings/maxcul1/', 'MAX!CUL (1.x)'],
            ['bindings/mcp23017/', 'MCP23017'],
            ['bindings/mcp230171/', 'MCP23017 (1.x)'],
            ['bindings/mcp34241/', 'MCP3424 (1.x)'],
            ['bindings/meteostick/', 'Meteostick'],
            ['bindings/miele/', 'Miele@home'],
            ['bindings/mihome/', 'Xiaomi Mi Smart Home'],
            ['bindings/milight/', 'Milight/Easybulb/Limitless'],
            ['bindings/milight1/', 'Milight (1.x)'],
            ['bindings/minecraft/', 'Minecraft'],
            ['bindings/mios1/', 'MiOS Bridge (1.x)'],
            ['bindings/mochadx101/', 'Mochad X10 (1.x)'],
            ['bindings/modbus1/', 'Modbus (1.x)'],
            ['bindings/mpd1/', 'MPD (1.x)'],
            ['bindings/mqtt1/', 'MQTT (1.x)'],
            ['bindings/mqttitude1/', 'OwnTracks (formerly MQTTitude) (1.x)'],
            ['bindings/myq1/', 'Chamberlain MyQ (1.x)'],
            ['bindings/mystromecopower1/', 'Mystrom Eco Power (1.x)'],
            ['bindings/neohub1/', 'NeoHub (1.x)'],
            ['bindings/nest/', 'Nest'],
            ['bindings/nest1/', 'Nest (1.x)'],
            ['bindings/netatmo/', 'Netatmo'],
            ['bindings/netatmo1/', 'Netatmo (1.x)'],
            ['bindings/network/', 'Network'],
            ['bindings/networkhealth1/', 'Network Health (1.x)'],
            ['bindings/networkupstools1/', 'Network UPS Tools (1.x)'],
            ['bindings/nibeheatpump/', 'Nibe Heatpump'],
            ['bindings/nibeheatpump1/', 'Nibe Heatpump (1.x)'],
            ['bindings/nikobus1/', 'Nikobus (1.x)'],
            ['bindings/nikohomecontrol/', 'Niko Home Control'],
            ['bindings/novelanheatpump1/', 'Novelan/Luxtronic Heat Pump (1.x)'],
            ['bindings/ntp/', 'NTP'],
            ['bindings/ntp1/', 'Network Time Protocol (NTP) (1.x)'],
            ['bindings/oceanic/', 'Oceanic'],
            ['bindings/omnilink1/', 'HAI/Leviton Omni and Lumina (1.x)'],
            ['bindings/onebusaway/', 'OneBusAway'],
            ['bindings/onewire1/', 'OneWire (1.x)'],
            ['bindings/onewiregpio/', 'OneWire GPIO'],
            ['bindings/onkyo/', 'Onkyo'],
            ['bindings/onkyo1/', 'Onkyo AV Receiver (1.x)'],
            ['bindings/openenergymonitor1/', 'Open Energy Monitor (1.x)'],
            ['bindings/openpaths1/', 'OpenPaths (1.x)'],
            ['bindings/opensprinkler/', 'OpenSprinkler'],
            ['bindings/opensprinkler1/', 'OpenSprinkler (1.x)'],
            ['bindings/orvibo/', 'Orvibo'],
            ['bindings/owserver1/', 'OWServer (1.x)'],
            ['bindings/panasonictv1/', 'Panasonic TV (1.x)'],
            ['bindings/panstamp1/', 'panStamp (1.x)'],
            ['bindings/pentair/', 'Pentair Pool'],
            ['bindings/piface1/', 'Piface (1.x)'],
            ['bindings/pilight1/', 'pilight (1.x)'],
            ['bindings/pioneeravr/', 'Pioneer AVR'],
            ['bindings/pioneeravr1/', 'Pioneer AV Receiver (1.x) (1.x)'],
            ['bindings/plcbus1/', 'PLCBus (1.x)'],
            ['bindings/plclogo1/', 'PLCLogo (1.x)'],
            ['bindings/plex1/', 'Plex (1.x)'],
            ['bindings/plugwise/', 'Plugwise'],
            ['bindings/plugwise1/', 'Plugwise (1.x)'],
            ['bindings/powerdoglocalapi1/', 'PowerDog Local API (1.x)'],
            ['bindings/powermax1/', 'Visonic Powermax (1.x)'],
            ['bindings/primare1/', 'Primare (1.x)'],
            ['bindings/pulseaudio/', 'Pulseaudio'],
            ['bindings/pulseaudio1/', 'Pulseaudio (1.x)'],
            ['bindings/regoheatpump/', 'RegoHeatPump'],
            ['bindings/rfxcom/', 'RFXCOM'],
            ['bindings/rfxcom1/', 'RFXCOM (1.x)'],
            ['bindings/rme/', 'RME'],
            ['bindings/rotelra1x/', 'Rotel Amplifier'],
            ['bindings/rpircswitch1/', 'Raspberry Pi RC Switch (1.x)'],
            ['bindings/russound/', 'Russound'],
            ['bindings/rwesmarthome1/', 'RWE SmartHome (1.x)'],
            ['bindings/sagercaster1/', 'Sager Weathercaster (1.x)'],
            ['bindings/sallegra1/', 'Sallegra (1.x)'],
            ['bindings/samsungac1/', 'Samsung Air Conditioner (1.x)'],
            ['bindings/samsungtv/', 'Samsung TV'],
            ['bindings/samsungtv1/', 'Samsung TV (1.x)'],
            ['bindings/sapp1/', 'Picnet Sapp (1.x)'],
            ['bindings/satel/', 'Satel Integra Alarm System'],
            ['bindings/satel1/', 'Satel Integra Alarm System (1.x)'],
            ['bindings/seneye/', 'Seneye'],
            ['bindings/sensebox/', 'senseBox'],
            ['bindings/serial1/', 'Serial (1.x)'],
            ['bindings/serialbutton/', 'Serial Button'],
            ['bindings/silvercrestwifisocket/', 'Silvercrest Wifi Plug'],
            ['bindings/sleepiq/', 'SleepIQ'],
            ['bindings/smaenergymeter/', 'SMA Energy Meter'],
            ['bindings/smarthomatic1/', 'Smarthomatic (1.x)'],
            ['bindings/snmp1/', 'SNMP (1.x)'],
            ['bindings/sonance1/', 'Sonance (1.x)'],
            ['bindings/sonos/', 'Sonos'],
            ['bindings/sonos1/', 'Sonos (1.x)'],
            ['bindings/souliss1/', 'Souliss (1.x)'],
            ['bindings/squeezebox/', 'Logitech Squeezebox'],
            ['bindings/squeezebox1/', 'Squeezebox (1.x)'],
            ['bindings/stiebelheatpump1/', 'Stiebel Eltron LWZ (1.x)'],
            ['bindings/swegonventilation1/', 'Swegon Ventilation (1.x)'],
            ['bindings/synopanalyzer/', 'Synop Analyzer'],
            ['bindings/systeminfo/', 'Systeminfo'],
            ['bindings/systeminfo1/', 'System Information (1.x)'],
            ['bindings/tacmi1/', 'TACmi (1.x)'],
            ['bindings/tankerkoenig/', 'Tankerkönig'],
            ['bindings/tcp1/', 'TCP & UDP (1.x)'],
            ['bindings/tellstick/', 'Tellstick'],
            ['bindings/tellstick1/', 'Tellstick (1.x)'],
            ['bindings/tesla/', 'Tesla'],
            ['bindings/tinkerforge1/', 'TinkerForge (1.x)'],
            ['bindings/tivo1/', 'TiVo (1.x)'],
            ['bindings/toon/', 'Toon'],
            ['bindings/tplinksmarthome/', 'TPLinkSmartHome'],
            ['bindings/tradfri/', 'TRÅDFRI'],
            ['bindings/ucprelayboard1/', 'UCProjects.eu Relay Board (1.x)'],
            ['bindings/upb1/', 'UPB (1.x)'],
            ['bindings/urtsi/', 'Somfy URTSI II'],
            ['bindings/urtsi1/', 'Somfy URTSI II (1.x)'],
            ['bindings/vdr1/', 'Video Disk Recorder (VDR) (1.x)'],
            ['bindings/vitotronic/', 'Vitotronic'],
            ['bindings/wago1/', 'WAGO (1.x)'],
            ['bindings/weather1/', 'Weather (1.x)'],
            ['bindings/weatherunderground/', 'WeatherUnderground'],
            ['bindings/wemo/', 'Belkin Wemo'],
            ['bindings/wemo1/', 'Wemo (1.x)'],
            ['bindings/wifiled/', 'WiFi LED'],
            ['bindings/windcentrale/', 'Windcentrale'],
            ['bindings/withings1/', 'Withings (1.x)'],
            ['bindings/wol1/', 'Wake-on-LAN (1.x)'],
            ['bindings/wr32231/', 'WR3223 ventilation controller (1.x)'],
            ['bindings/xbmc1/', 'XBMC binding (for KODI) (1.x) (1.x)'],
            ['bindings/xpl1/', 'xPL (1.x)'],
            ['bindings/yahooweather/', 'YahooWeather'],
            ['bindings/yamahareceiver/', 'Yamaha Receiver'],
            ['bindings/yamahareceiver1/', 'Yamaha Receiver (1.x) (1.x)'],
            ['bindings/zibase1/', 'Zibase (1.x)'],
            ['bindings/zigbee/', 'ZigBee'],
            ['bindings/zoneminder/', 'Zoneminder'],
            ['bindings/zwave/', 'ZWave'],
            ['bindings/zwave1/', 'Z-Wave (1.x)'],
            ['bindings/zway/', 'Z-Way'],
          ]
        },
        {
          title: 'System Integrations',
          collapsible: false,
          children: [
            ['integrations/alexa-skill/', 'Amazon Alexa Skill'],
            ['integrations/dropbox/', 'Dropbox Synchronization'],
            ['integrations/gcal/', 'Google Calendar Scheduler'],
            ['integrations/homekit/', 'HomeKit Add-on'],
            ['integrations/hueemulation/', 'openHAB Hue Emulation'],
            ['integrations/imperihome/', 'ImperiHome integration service'],
            ['integrations/mycroft-skill/', 'Mycroft AI Skill'],
            ['integrations/openhabcloud/', 'openHAB Cloud Connector'],
          ]
        },
        {
          title: 'Actions',
          collapsible: false,
          children: [
            ['actions/astro/', 'Astro'],
            ['actions/ciscospark/', 'Cisco Spark'],
            ['actions/dscalarm/', 'DSC Alarm'],
            ['actions/ecobee/', 'Ecobee'],
            ['actions/harmonyhub/', 'Logitech Harmony Hub'],
            ['actions/homematic/', 'Homematic'],
            ['actions/mail/', 'Mail'],
            ['actions/mios/', 'MiOS'],
            ['actions/mqtt/', 'MQTT'],
            ['actions/nma/', 'NotifyMyAndroid'],
            ['actions/openwebif/', 'OpenWebIf'],
            ['actions/pebble/', 'Pebble'],
            ['actions/prowl/', 'Prowl'],
            ['actions/pushbullet/', 'Pushbullet'],
            ['actions/pushover/', 'Pushover'],
            ['actions/pushsafer/', 'Pushsafer'],
            ['actions/satel/', 'Satel'],
            ['actions/squeezebox/', 'Squeezebox'],
            ['actions/telegram/', 'Telegram'],
            ['actions/tinkerforge/', 'TinkerForge'],
            ['actions/twitter/', 'Twitter'],
            ['actions/weather/', 'Weather'],
            ['actions/xbmc/', 'XBMC'],
            ['actions/xmpp/', 'XMPP'],
            ['actions/xpl/', 'xPL'],
          ]                      
        },
        {
          title: 'Data Persistence',
          collapsible: false,
          children: [
            ['persistence/caldav/', 'CalDAV'],
            ['persistence/cosm/', 'Xively (formerly Cosm)'],
            ['persistence/db4o/', 'db4o'],
            ['persistence/dynamodb/', 'Amazon DynamoDB'],
            ['persistence/exec/', 'Exec'],
            ['persistence/influxdb/', 'InfluxDB (0.9 and newer)'],
            ['persistence/influxdb08/', 'InfluxDB (up to 0.8.x)'],
            ['persistence/jdbc/', 'JDBC'],
            ['persistence/jpa/', 'Java Persistence API (JPA)'],
            ['persistence/mapdb/', 'mapdb'],
            ['persistence/mongodb/', 'MongoDB'],
            ['persistence/mqtt/', 'MQTT'],
            ['persistence/mysql/', 'MySQL'],
            ['persistence/rrd4j/', 'rrd4j'],
            ['persistence/sense/', 'Sen.Se'],
            ['persistence/sitewhere/', 'SiteWhere'],
          ]
        },
        {
          title: 'Data Transformation',
          collapsible: false,
          children: [
            ['transformations/exec/', 'Exec'],
            ['transformations/javascript/', 'JavaScript'],
            ['transformations/jsonpath/', 'JsonPath'],
            ['transformations/map/', 'Map'],
            ['transformations/regex/', 'RegEx'],
            ['transformations/scale/', 'Scale'],
            ['transformations/xpath/', 'XPath'],
            ['transformations/xslt/', 'XSLT'],
          ]
        },
        {
          title: 'Voice',
          collapsible: false,
          children: [
            ['voice/mactts/', 'MacOS Text-to-Speech'],
            ['voice/marytts/', 'Mary Text-to-Speech'],
            ['voice/voicerss/', 'VoiceRSS Text-to-Speech'],
          ]
        }
        
      ]
    }
  }
}
