import React, { useCallback, useState, useMemo } from 'react'
import Field from '../../../components/Field'
import RemarkLoan from './RemarkLoan'

const CalculatorLoan = () => {
  const [values, setValues] = useState({ price: '', year: '', rate: '' })

  const onChange = useCallback((event) => {
    const { name, value } = event.target
    setValues((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }, [])

  const resultLoan = useMemo(() => {
    const price = Number(values.price)
    const year = Number(values.year)
    const rate = Number(values.rate)
    if (price <= 0) return 0
    if (year <= 0) return price
    if (rate <= 0) return price
    const result = ((((rate / 100) * price) + price) / year) / 12
    return result.toFixed(2)
  }, [values])


  return (
    <div style={{ width: 500 }}>
      <Field
        type='number'
        label='จำนวนเงินที่ขอกู้'
        onChange={onChange}
        name='price'
        value={values.price}
        logCount // logCount === logCount={true}
      />
      <Field
        type='number'
        label='ระยะเวลาที่ขอกู้'
        onChange={onChange}
        name='year'
        value={values.year}
        logCount
      />
      <Field
        type='number'
        label='อัตราดอกเบี้ยตามประกาศ'
        onChange={onChange}
        name='rate'
        value={values.rate}
        logCount
      />

      ผลลัพธ์
      <h2>{resultLoan}</h2>
      <RemarkLoan rate={values.rate} />
    </div>
  )
}

export default CalculatorLoan
