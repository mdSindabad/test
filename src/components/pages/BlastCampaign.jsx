import React from 'react'
import { BiCalendar } from 'react-icons/bi'
import { BsFillPatchCheckFill, BsCaretDownSquareFill } from 'react-icons/bs'
import { FaExternalLinkAlt, FaUserCircle } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { HiOutlineArrowSmUp, HiOutlineArrowSmDown, HiOutlineArrowSmRight } from 'react-icons/hi'

const BlastCampaign = () => {
    return (
        <div className='container my-4 rounded-3 p-4 bg-white'>
            {/** <!--begin::Header--> */}
            <h2>1. BlastCampaign</h2>
            <p className='text-muted'>In this section you're going to setup yout traking for your campaign. There is one necessary tracking code thathas to be placedon your page, and there rest are optional.</p>
            {/** <!--end::Header--> */}
            <form>
                {/** <!--start::Traffic--> */}
                <h4 className='mt-3'>Select Your Traffic Campaign</h4>
                <div className='container bg-light p-3 rounded-3'>
                    <div class="mb-3">
                        <label for="traficCampaign" class="form-label">Select Trafic Campaign</label>
                        <select id="traficCampaign" class="form-select">
                            <option>Select Your Campaign</option>
                        </select>
                        <p className="text-muted mt-2">
                            Please select your Campaign
                        </p>
                    </div>
                    <div className='row'>
                        {/** <!--start::StartDate--> */}
                        <div className="col-6">
                            <div class="form-group row">
                                <label class=" text-right text-secondary fw-bold ">Select Start Date</label>
                                <div class="">
                                    <div class="input-group date">
                                        <label
                                            for="startDate" class="input-group-text">
                                            <BiCalendar />
                                        </label>
                                        <input
                                            id="startDate" type="date" class="form-control" readonly placeholder="Select date" />
                                        <div class="input-group-append">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/** <!--end::StartDate--> */}
                        {/** <!--start::EndDate--> */}
                        <div className="col-6">
                            <div class="form-group row">
                                <label class="text-right text-secondary fw-bold">Select End Date</label>
                                <div class="">
                                    <div class="input-group date">
                                        <label
                                            for="startDate" class="input-group-text">
                                            <BiCalendar />
                                        </label>
                                        <input
                                            id="startDate" type="date" class="form-control" readonly placeholder="Select date" />
                                        <div class="input-group-append">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/** <!--end::EndDate--> */}
                    </div>
                    <p className='text-secondary mt-2'>The tracking will occur only during the dates you set</p>
                </div>
                {/** <!--end::Traffic--> */}
                {/** <!--start::Vendor--> */}
                <div className="row mt-4">
                    <div className="col-12 col-md-6">
                        <div>
                            <h4 className='mt-3'>Select Your Vendor</h4>
                            <p className='text-muted'>This is the section you need to select your vendor for this traffic campaign.</p>
                            <div class="mb-3">
                                <label for="traficCampaign" class="form-label">Select Your Vendor</label>
                                <select id="traficCampaign" class="form-select bg-light">
                                    <option>Name of Vendor</option>
                                </select>
                                <p className="text-muted mt-2">
                                    Please enter your vendor name
                                </p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h4 className='mt-3'>Click Information</h4>
                            <p className='text-muted'>In this section you need to specify information pertaining to your clicks.</p>
                            <div class="mb-3">
                                <label for="traficCampaign" class="form-label">Number of Clicks</label>
                                <select id="traficCampaign" class="form-select">
                                    <option>Enter Number</option>
                                </select>
                                <p className="text-muted mt-2">
                                    Please enter the number of clicksyou are tracking
                                </p>
                            </div>
                            <div class="mb-3">
                                <label for="traficCampaign" class="form-label">Price per Clicks</label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">$</span>
                                    <input type="text" placeholder="Enter Price" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                    <span class="input-group-text">.00</span>
                                </div>
                                <p className="text-muted mt-2">
                                    Please enter the price per click
                                </p>
                            </div>
                        </div>
                    </div>
                    {/** <!--end::Vendor--> */}
                    <div className="col-12 col-md-6">
                        {/** <!--start::info--> */}
                        <div className="bg-light p-4 rounded-3">
                            <div className='d-flex justify-content-between'>
                                <h6 className="text-info fw-bold">Max Smith <BsFillPatchCheckFill /></h6>
                                <div>
                                    <FaExternalLinkAlt className='mx-2' />
                                    <BsCaretDownSquareFill />
                                </div>
                            </div>
                            <div>
                                <div className="d-flex">
                                    <p className='me-3 text-secondary'><FaUserCircle /> PST</p>
                                    <p className=' text-secondary'><GoLocation /> (307)259-1054</p>
                                </div>
                                <div>
                                    <p className='text-end text-info'>View Details</p>
                                    <div className='row g-4 justify-content-between'>
                                        <div className='bg-white col-5 p-2'>
                                            <div className='fw-bold d-flex align-items-end mb-1'>
                                                <div><HiOutlineArrowSmUp className='text-primary mr-2' /></div>
                                                <div>3</div>
                                            </div>
                                            <div>
                                                <p className='text-secondary fw-bold'>Campaigns</p>
                                            </div>
                                        </div>
                                        <div className='bg-white col-5 p-2'>
                                            <div className='fw-bold d-flex align-items-end mb-1'>
                                                <div><HiOutlineArrowSmUp className='text-primary mr-2' /></div>
                                                <div>800</div>
                                            </div>
                                            <div>
                                                <p className='text-secondary fw-bold'>Total Clicks</p>
                                            </div>
                                        </div>
                                        <div className='bg-white col-5 p-2'>
                                            <div className='fw-bold d-flex align-items-end mb-1'>
                                                <div><HiOutlineArrowSmUp className='text-primary mr-2' /></div>
                                                <div>$125</div>
                                            </div>
                                            <div>
                                                <p className='text-secondary fw-bold'>Total Sales</p>
                                            </div>
                                        </div>
                                        <div className='bg-white col-5 p-2'>
                                            <div className='fw-bold d-flex align-items-end mb-1'>
                                                <div><HiOutlineArrowSmDown className='text-danger mr-2' /></div>
                                                <div>80</div>
                                            </div>
                                            <div>
                                                <p className='text-secondary fw-bold'>Vendor Score</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h6>Past Campaigns:</h6>
                                    <table className='table'>
                                        <thead>
                                            <tr className='text-info'>
                                                <th className='border-0'>Campaign</th>
                                                <th className='border-0'>Date</th>
                                                <th className='border-0'>Clicks</th>
                                                <th className='border-0'>Sales</th>
                                                <th className='border-0'>Score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th className='border-0'>test</th>
                                                <td className='border-0'>1/29/22</td>
                                                <td className='border-0'>200</td>
                                                <td className='border-0'>$65.00</td>
                                                <td className='border-0'>85</td>
                                            </tr>
                                            <tr>
                                                <th className='border-0'>test2</th>
                                                <td className='border-0'>1/30/22</td>
                                                <td className='border-0'>500</td>
                                                <td className='border-0'>$35.00</td>
                                                <td className='border-0'>88</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/** <!--end::info--> */}
                    </div>
                </div>
                <div className='text-end'>

                    <button className='btn btn-info text-white mt-4'>Continue <HiOutlineArrowSmRight /></button>
                </div>
            </form>

        </div>
    )
}

export default BlastCampaign