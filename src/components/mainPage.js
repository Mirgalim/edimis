import React from 'react';
import { Layout, Menu, theme, Table, Row } from 'antd';
import { SearchOutlined, QuestionOutlined, BellFilled } from '@ant-design/icons';
import '../styles/mainPage.css'
import Logo from '../assets/logo.png'
import Sidebar from './sidebar';
const { Header, Content, Footer } = Layout;
const items1 = ['1'].map((key) => ({
    key,
    label: `EDIMIS 3.0`,
}));
const { Column, ColumnGroup } = Table;
const MainPage = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{width: '100vw', height: '100vh'}}>
            <Header style={{padding: '0px'}}>
                <Row style={{ width: '100vw', height: '70px' }}>
                    <Row style={{width: '20vw', height: '70px'}}>
                        <div className='header-first'>
                            <img src={Logo} alt='logo' style={{ width: '45px' }} />
                        </div>
                        <div style={{ color: 'white', fontSize: 'medium' }}>
                            EDIMIS 3.0
                        </div>-
                    </Row>
                    <Row style={{width: '65vw', height: '70px'}}>
                    </Row>
                    <Row style={{ width: '15vw',height: '70px'}} className='icons'>
                    <SearchOutlined style={{color: 'white'}} />
                    <QuestionOutlined style={{color: 'white'}} /> 
                    <BellFilled  style={{color: 'white'}} />
                    </Row>
                </Row>
            </Header>
            <Content
            >
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'row'
                    }}
                >
                    <Sidebar />
                    <Table dataSource={data} style={{ width: "100vw" }}>
                        <ColumnGroup>
                            <Column title="First Name" dataIndex="Fname" key="Fname" />
                            <Column title="Last Name" dataIndex="Lname" key="Lname" />
                            <Column title="Phone" dataIndex="Phone" key="Phone" />
                        </ColumnGroup>
                        <Column title="Register" dataIndex="Reg" key="Reg" />
                        <Column title="Address" dataIndex="ShortAddress" key="ShortAddress" />
                    </Table>
                </Layout>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                ECM BILLING CENTER @2022
            </Footer>
        </Layout>
    );
};
export default MainPage;

const data = [
    {
        key: '1',
        Lname: 'Намжилсүрэн',
        Fname: 'Батболд',
        Reg: 'nf88032554',
        Phone: ' 99816162',
        Uname: 'Batbold',
        RegDate: '2022-08-24T15:28:04.667',
        WorkID: '002',
        WorkName: 'Авлага шалгуулах',
        WID: '326',
        ModeID: '003',
        ModeName: ' Авлагын үлдэгдэлгүй',
        Descr: 'sdfsdfsddf',
        WUname: 'Batbold',
        WRegDate: '2022-08-24T15:32:05.110',
        PowerName: '220В',
        DistrictName: 'Бусад',
        HorooName: '1-р хороо',
        StreetName: 'Бусад',
        Toot: 'dfdfgfgdfdgdfg',
        ShortAddress: ' Улаанбаатар / Сонгино-Хайрхан / 1-р хороо / Бусад / Бусад / dfdfgfgdfdgdfg Тоот',
        TechType: '0',
        OpType: '2',
        NextMode: '001',
        Torol: '0',
    },
    {
        key: '2',
        Ccode: '',
        AppCode: '99000000121',
        Lname: 'ecm',
        Fname: 'ecm',
        Reg: '123456',
        Mobile: '70102076',
        Phone: '99472947',
        Uname: 'Batbold',
        RegDate: '2022-08-31T16:03:21.260',
        WorkID: '002',
        WorkName: 'Авлага шалгуулах',
        WID: '348',
        ModeID: '005',
        ModeName: 'Буцаасан',
        Descr: 'Авлага шалгах боломжгүй тул буцаав',
        WUname: 'Batbold',
        WRegDate: '2022-09-01T10:44:53.903',
        PowerName: '380В',
        DistrictName: 'Бусад',
        HorooName: ' 6-р хороо',
        StreetName: 'Бусад',
        Toot: '201',
        ShortAddress: '132dsfs',
        TechType: '0',
        OpType: '9',
        NextMode: '001',
        Torol: '1',
        apphistory: [
            {
                AppID: '99000000121',
                DepName: ' Авлага барагдуулах хэсэг',
                WorkName: ' Авлага шалгуулах',
                ModeName: 'Буцаасан',
                ExecDate: '0',
                RegDate: '2022-09-01T10:44:53.903',
                Descr: ' Авлага шалгах боломжгүй тул буцаав',
                IsActive: '0',
                className: 'danger'
            },
            {
                AppID: '99000000121',
                DepName: 'Авлага барагдуулах хэсэг',
                WorkName: ' Авлага шалгуулах',
                ModeName: ' Авлага шалгуулахаар илгээсэн',
                ExecDate: '3',
                RegDate: '2022-09-01T10:36:41.137',
                Descr: 'Авлага шалгуулах',
                IsActive: '1',
                className: 'info'
            }
        ]
    },
    {
        key: '3',
        Ccode: '',
        AppCode: '99000000124',
        Lname: 'erter',
        Fname: 'erter',
        Reg: 'er45564656',
        Mobile: '45646556',
        Phone: '45645645654',
        Uname: 'Batbold',
        RegDate: '2022-08-31T16:20:40.190',
        WorkID: '002',
        WorkName: 'Авлага шалгуулах',
        WID: '347',
        ModeID: '004',
        ModeName: 'Авлагын үлдэгдэлтэй болох нь тогтоогдсон',
        Descr: 'Авлагын үлдэгдэлтэй 15000 төгрөг',
        WUname: 'Batbold',
        WRegDate: '2022-09-01T10:43:41.857',
        PowerName: '220В',
        DistrictName: 'Бусад',
        HorooName: '2-р хороо',
        StreetName: 'Бусад',
        Toot: '145645',
        ShortAddress: ' Архангай / ИХТАМИР / 2-р хороо / Бусад / Бусад / 145645 Тоот ',
        TechType: '0',
        OpType: '3',
        NextMode: '001',
        Torol: '0',
        apphistory: [
            {
                AppID: '99000000124',
                DepName: 'Авлага барагдуулах хэсэг',
                WorkName: ' Авлага шалгуулах',
                ModeName: 'Авлагын үлдэгдэлтэй болох нь тогтоогдсон',
                ExecDate: '3',
                RegDate: '2022-09-01T10:43:41.857',
                Descr: ' Авлагын үлдэгдэлтэй 15000 төгрөг',
                IsActive: '0',
                className: 'danger'
            },
            {
                AppID: '99000000124',
                DepName: 'Авлага барагдуулах хэсэг',
                WorkName: ' Авлага шалгуулах',
                ModeName: ' Авлага шалгуулахаар илгээсэн',
                ExecDate: '3',
                RegDate: '2022-09-01T10:36:19.640',
                Descr: 'Авлага шалгуулах',
                IsActive: '1',
                className: 'info'
            }
        ]
    },
    {
        key: '4',
        Ccode: '',
        AppCode: '99000000129',
        Lname: 'MMS',
        Fname: ' ЕСМ Биллинг',
        Reg: ' 2526123___',
        Mobile: '99111111',
        Phone: '77117777',
        Uname: 'Batbold',
        RegDate: '2022-09-05T18:08:58.560',
        WorkID: '002',
        WorkName: 'Техник,шинэ холболт',
        WID: '383',
        ModeID: ' 008',
        ModeName: ' Шинэ холболтын зөвшөөрөл ТҮ-ээс олгосон',
        Descr: 'Гүйцэтгэл орж байна',
        WUname: 'Batbold',
        WRegDate: '2022-09-05T18:18:19.580',
        PowerName: ' 380В',
        DistrictName: 'Бусад',
        HorooName: '9-р хороо',
        StreetName: 'Бусад',
        Toot: '001010',
        ShortAddress: ' Улаанбаатар / Хан-Уул / 9-р хороо / Бусад / Бусад / 001010 Тоот',
        TechType: '0',
        OpType: '2',
        NextMode: '001',
        Torol: '1',
        apphistory: [
            {
                AppID: '99000000129',
                DepName: 'Авлага барагдуулах хэсэг',
                WorkName: 'Авлага шалгуулах',
                ModeName: 'Авлага шалгуулахаар илгээсэн',
                ExecDate: '3',
                RegDate: '2022-09-05T18:09:08.480',
                Descr: 'Авлага шалгах ажлын захиалга илгээв',
                IsActive: '1',
                className: 'info'
            },
            {
                AppID: '99000000129',
                DepName: 'Авлага барагдуулах хэсэг',
                WorkName: 'Авлага шалгуулах',
                ModeName: ' Авлага шалгуулахаар хувиарласан',
                ExecDate: '3',
                RegDate: '2022-09-05T18:10:53.093',
                Descr: 'авлага шалгах ажил хуваарилах',
                IsActive: '1',
                className: 'warning'
            },
            {
                AppID: '99000000129',
                DepName: ' Авлага барагдуулах хэсэг',
                WorkName: 'Авлага шалгуулах',
                ModeName: ' Авлагын үлдэгдэлгүй',
                ExecDate: '3',
                RegDate: '2022-09-05T18:11:48.817',
                Descr: 'өр төлбөр байхгүй гэрээ хийх боломжтой',
                IsActive: '1',
                className: 'success'
            }
        ]
    },
    {
        key: '5',
        Ccode: '',
        AppCode: '99000000133',
        Lname: 'Tuunii owog',
        Fname: ' Tuunii ner',
        Reg: 'Ab99887766',
        Mobile: '99887766',
        Phone: '12345678',
        Uname: 'Batbold',
        RegDate: '2022-09-06T13:29:39.850',
        WorkID: '002',
        WorkName: 'Авлага шалгуулах',
        WID: '486',
        ModeID: '004',
        ModeName: 'Авлагын үлдэгдэлтэй болох нь тогтоогдсон',
        Descr: 'үлдэгдэлтэй',
        WUname: 'Batbold',
        WRegDate: '2022-09-15T15:28:33.577',
        PowerName: ' 220В',
        DistrictName: 'Бусад',
        HorooName: '1-р хороо',
        StreetName: 'Бусад',
        Toot: '1',
        ShortAddress: 'Улаанбаатар / Сонгино-Хайрхан / 1-р хороо / Бусад / Бусад / 1 Тоот',
        TechType: '0',
        OpType: '3',
        NextMode: '001',
        Torol: '0',
        apphistory: [
            {
                AppID: '99000000133',
                DepName: ' Авлага барагдуулах хэсэг',
                WorkName: 'Авлага шалгуулах',
                ModeName: 'Авлага шалгуулахаар илгээсэн',
                ExecDate: '3',
                RegDate: '2022-09-06T13:29:42.347',
                Descr: 'Авлага шалгах ажлын захиалга илгээв',
                IsActive: '1',
                className: 'info'
            },
            {
                AppID: '99000000133',
                DepName: 'Авлага барагдуулах хэсэг',
                WorkName: ' Авлага шалгуулах',
                ModeName: 'Авлага шалгуулахаар хувиарласан',
                ExecDate: '3',
                RegDate: '2022-09-08T17:27:07.943',
                Descr: 'бөыбө',
                IsActive: '1',
                className: 'warning'
            },
            {
                AppID: '99000000133',
                DepName: 'Авлага барагдуулах хэсэг',
                WorkName: ' Авлага шалгуулах',
                ModeName: 'Авлагын үлдэгдэлтэй болох нь тогтоогдсон',
                ExecDate: '3',
                RegDate: '2022-09-08T17:28:25.053',
                Descr: 'ыбөыбө',
                IsActive: '1',
                className: 'danger'
            },
            {
                AppID: '99000000133',
                DepName: 'Авлага барагдуулах хэсэг',
                WorkName: 'Авлага шалгуулах',
                ModeName: 'Авлагын үлдэгдэлтэй болох нь тогтоогдсон',
                ExecDate: '3',
                RegDate: '2022-09-15T15:28:33.577',
                Descr: 'үлдэгдэлтэй',
                IsActive: '0',
                className: 'danger'
            },
            {
                AppID: ' 99000000133',
                DepName: 'Авлага барагдуулах хэсэг',
                WorkName: ' Авлага шалгуулах',
                ModeName: 'Авлагын үлдэгдэлгүй',
                ExecDate: '3',
                RegDate: '2022-09-09T11:50:56.507',
                Descr: ' Авлагын үлдэгдэлгүй\n',
                IsActive: '1',
                className: ' success'
            }
        ]
    }
]