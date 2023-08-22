return function()
    AddStateBagChangeHandler("pmi:vehicle",nil,function(a,s,value,f,g)
   
        print("From State Bag: ",GetEntityFromStateBagName(a))
    end)

end