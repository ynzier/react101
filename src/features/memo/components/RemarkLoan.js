import React, { memo } from 'react'

const RemarkLoan = props => {
  console.count('remarkLoan')
  return (
    <p style={{ textAlign: 'start' }}>
      {/* {props.value.rate} */}
      หมายเหตุ
      การคำนวณเงินงวดคิดจากอัตราดอกเบี้ยที่ท่านระบุบวกร้อยละ 1 เพื่อให้ตัดชำระเป็นเงินต้น และผลลัพธ์จะปัดตัวกลมเป็นหลักร้อยบาท ทั้งนี้ ผลการประเมินจากเครื่องคำนวณสินเชื่อเป็นเพียงการประเมินวงเงินกู้ในเบื้องต้น ส่วนการอนุมัติสินเชื่อสงวนสิทธิ์เป็นไปตามหลักเกณฑ์ของธนาคาร
    </p>
  )
}

export default memo(RemarkLoan)
