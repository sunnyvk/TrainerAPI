const express=require('express')
const mongoose=require('mongoose')
const DailyAttendence=require('./Trainer/LiveClasses/dailyAttendence')
const MonthlyReport=require('./Trainer/LiveClasses/monthlyReport')
const ClientAttendenceReg=require('./Trainer/LiveClasses/clientAttendenceReg')
const AllBatchesDailyAttendence=require('./Trainer/AllBatches/allBatchesDailyAttendence')
const AllBatchesMonthlyReport=require('./Trainer/AllBatches/allBatchesMonthlyReport')
const AllBatchesClientAttendenceReg=require('./Trainer/AllBatches/allBatchesClientAttendenceReg')
const PTClassesDailyAttendence=require('./Trainer/PTClasses/ptClassesDailyAttendence')
const PTClassesMonthlyReport=require('./Trainer/PTClasses/ptClassesMonthlyReport')
const PTClassesClientAttendenceReg=require('./Trainer/PTClasses/ptClassesClientAttendenceReg')
const TTCClassesDailyAttendence=require('./Trainer/TTCClasses/ttcClassesDailyAttendence')
const TTCClassesMonthlyReport=require('./Trainer/TTCClasses/ttcClassesMonthlyReport')
const TTCClassesClientAttendenceReg=require('./Trainer/TTCClasses/ttcClassesClientAttendenceReg')
const AllMembersClientAttendenceReg=require('./Trainer/AllMembers/AllMembersClientAttendenceReg')
const app=express()


app.use(express.json())

//Trainer

//Live classes

// Daily Attendence
// to create a daily attendence
app.post('/dailyattendence',async(req,res)=>{
    try{
     const dailyAttendence= await DailyAttendence.create(req.body)
     res.status(200).json(dailyAttendence);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a daily attendence
app.get('/dailyattendence',async(req,res)=>{
    try{
        const dailyAttendence = await DailyAttendence.find({});
        res.status(200).json(dailyAttendence);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//MonthlyReprt
// to create a monthly report
app.post('/monthlyreport',async(req,res)=>{
    try{
     const monthlyReport= await MonthlyReport.create(req.body)
     res.status(200).json(monthlyReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a monthly report
app.get('/monthlyreport',async(req,res)=>{
    try{
        const monthlyReport = await MonthlyReport.find({});
        res.status(200).json(monthlyReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// ClientAttendenceReg
// to create a clientattendence registration
app.post('/clientattendencereg',async(req,res)=>{
    try{
     const clientAttendenceReg= await ClientAttendenceReg.create(req.body)
     res.status(200).json(clientAttendenceReg);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a clientattendence registration
app.get('/clientattendencereg',async(req,res)=>{
    try{
        const clientAttendenceReg = await ClientAttendenceReg.find({});
        res.status(200).json(clientAttendenceReg);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//All Batches

// Daily Attendence
// to create a daily attendence
app.post('/allbatchesdailyattendence',async(req,res)=>{
    try{
     const allBatchesDailyAttendence= await AllBatchesDailyAttendence.create(req.body)
     res.status(200).json(allBatchesDailyAttendence);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a daily attendence
app.get('/allbatchesdailyattendence',async(req,res)=>{
    try{
        const allBatchesDailyAttendence = await AllBatchesDailyAttendence.find({});
        res.status(200).json(allBatchesDailyAttendence);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//MonthlyReprt
// to create a monthly report
app.post('/allbatchesmonthlyreport',async(req,res)=>{
    try{
     const allBatchesMonthlyReport= await AllBatchesMonthlyReport.create(req.body)
     res.status(200).json(allBatchesMonthlyReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a monthly report
app.get('/allbatchesmonthlyreport',async(req,res)=>{
    try{
        const allBatchesMonthlyReport = await AllBatchesMonthlyReport.find({});
        res.status(200).json(allBatchesMonthlyReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


// ClientAttendenceReg
// to create a all batches clientattendence registration
app.post('/allbatchesclientattendencereg',async(req,res)=>{
    try{
     const allBatchesClientAttendenceReg = await AllBatchesClientAttendenceReg.create(req.body)
     res.status(200).json(allBatchesClientAttendenceReg);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a all batches clientattendence registration
app.get('/allbatchesclientattendencereg',async(req,res)=>{
    try{
        const allBatchesClientAttendenceReg = await AllBatchesClientAttendenceReg.find({});
        res.status(200).json(allBatchesClientAttendenceReg);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//PT Classes

// Daily Attendence
// to create a pt classes daily attendence
app.post('/ptclassesdailyattendence',async(req,res)=>{
    try{
     const ptClassesDailyAttendence= await PTClassesDailyAttendence.create(req.body)
     res.status(200).json(ptClassesDailyAttendence);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a daily attendence
app.get('/ptclassesdailyattendence',async(req,res)=>{
    try{
        const ptClassesDailyAttendence = await PTClassesDailyAttendence.find({});
        res.status(200).json(ptClassesDailyAttendence);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//MonthlyReprt
// to create a pt classes monthly report
app.post('/ptclassesmonthlyreport',async(req,res)=>{
    try{
     const ptClassesMonthlyReport= await PTClassesMonthlyReport.create(req.body)
     res.status(200).json(ptClassesMonthlyReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a pt classes monthly report
app.get('/ptclassesmonthlyreport',async(req,res)=>{
    try{
        const ptClassesMonthlyReport = await PTClassesMonthlyReport.find({});
        res.status(200).json(ptClassesMonthlyReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// ClientAttendenceReg
// to create a pt classes clientattendence registration
app.post('/ptclassesclientattendencereg',async(req,res)=>{
    try{
     const ptClassesClientAttendenceReg = await PTClassesClientAttendenceReg.create(req.body)
     res.status(200).json(ptClassesClientAttendenceReg);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a pt classes clientattendence registration
app.get('/ptclassesclientattendencereg',async(req,res)=>{
    try{
        const ptClassesClientAttendenceReg = await PTClassesClientAttendenceReg.find({});
        res.status(200).json(ptClassesClientAttendenceReg);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//TTC Classes

// Daily Attendence
// to create a ttc classes daily attendence
app.post('/ttclasses/dailyattendence',async(req,res)=>{
    try{
     const ttcClassesDailyAttendence= await TTCClassesDailyAttendence.create(req.body)
     res.status(200).json(ttcClassesDailyAttendence);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a ttc classes daily attendence
app.get('/ttclasses/dailyattendence',async(req,res)=>{
    try{
        const ttcClassesDailyAttendence = await TTCClassesDailyAttendence.find({});
        res.status(200).json(ttcClassesDailyAttendence);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//MonthlyReprt
// to create a ttc classes monthly report
app.post('/ttcclasses/monthlyreport',async(req,res)=>{
    try{
     const ttcClassesMonthlyReport= await TTCClassesMonthlyReport.create(req.body)
     res.status(200).json(ttcClassesMonthlyReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a ttc classes monthly report
app.get('/ttcclasses/monthlyreport',async(req,res)=>{
    try{
        const ttcClassesMonthlyReport = await TTCClassesMonthlyReport.find({});
        res.status(200).json(ttcClassesMonthlyReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


// ClientAttendenceReg
// to create a ttc classes clientattendence registration
app.post('/ttcclasses/clientattendencereg',async(req,res)=>{
    try{
     const ttcClassesClientAttendenceReg = await TTCClassesClientAttendenceReg.create(req.body)
     res.status(200).json(ttcClassesClientAttendenceReg);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a ttc classes clientattendence registration
app.get('/ttcclasses/clientattendencereg',async(req,res)=>{
    try{
        const ttcClassesClientAttendenceReg = await TTCClassesClientAttendenceReg.find({});
        res.status(200).json(ttcClassesClientAttendenceReg);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//All Members


// ClientAttendenceReg
// to create a all members clientattendence registration
app.post('/allmembers/clientattendencereg',async(req,res)=>{
    try{
     const allMembersClientAttendenceReg = await AllMembersClientAttendenceReg.create(req.body)
     res.status(200).json(allMembersClientAttendenceReg);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a all members clientattendence registration
app.get('/allmembers/clientattendencereg',async(req,res)=>{
    try{
        const allMembersClientAttendenceReg = await AllMembersClientAttendenceReg.find({});
        res.status(200).json(allMembersClientAttendenceReg);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



mongoose.set("strictQuery",false)
mongoose.connect('mongodb+srv://admin:Sunny2798@sunnyapi.kndypoa.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() =>{
    console.log('connected to MongoDB')
    app.listen(3000,()=>{
        console.log('Node api is running on port 3000')
    })
}).catch((error) =>{
    console.log(error)
})