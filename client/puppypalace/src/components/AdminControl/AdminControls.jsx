import React from 'react'
import AdminClinicCard from './AdminClinicCard'
import AdminUserCard from './AdminUserCard'


export default function AdminControls() {
    return (
        <div>
            <AdminClinicCard name='veterinaria arguello' direction='calle 46 460' image='https://resizer.glanacion.com/resizer/SQxo6HknVwQsjWhZSKrApD3kfY8=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/HOMD6CXOP5HX5KZZSHLVOHITZY.png'/>
            <AdminUserCard name='Ivan' lastname='Toneatto' direction='calle 46 460' image='https://www.latercera.com/resizer/UvfBPh1sqyoGpgeuWPdVqcZbmfU=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/3T6LCQ24TJGTVOZTDHXWLQXGJM.jpg' phone='3525644644' username='Navito' email='Ivanariel999@gmail.com'/>
        </div>
    )
}
