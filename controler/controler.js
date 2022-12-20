import lights from '../model/model.js';

export const owner = async (req,res) => {
    try{
        const costomer = await lights.create(req.body)
        res.status(201).json({
            data: costomer
        })
    }catch(e){
    res.status(404).json({
        message: e.message
    })
    }
}


export const updateOwner= async (req,res) => {
    try{
        const id = req.params.id;
        const updated = await lights.update(req.body,{where:{id:id}});
        if(updated == 0){
            res.status(404).json({
                message: "no such id" + id
            })
        }else{
            res.status(200).json({
                message: "owner updated succesfully"
            })
        }
    }catch(e){
     console.log(e.message)
    }
}


export const allOwners =async (req,res) => {
try{
    const all = await lights.findAll();
    res.status(200).json({
        data: all
    })
}catch (e){
res.status(404).json({
    message: "Error fetching allOwners"
})
}
}

export const oneOwner =async (req,res) => {
    try{
        const id =req.params.id;
        const one = await lights.findAll({where:{id:id}});
        res.status(200).json({
            data: one
        })
    }catch (e){
    res.status(404).json({
        message: "An error occured while getting a single owner"
    })
    }
    }
    

    export const deleteOne =async (req,res) => {
        try{
            const id =req.params.id;
            const deleted = await lights.destroy({where:{id:id}});
            res.status(200).json({
                data: deleted
            })
        }catch (e){
        res.status(404).json({
            message: "Owner deleted successfully"
        })
        }
        }