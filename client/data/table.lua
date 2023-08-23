local pmiDataClient = setmetatable({},{
    __newindex = function(t,k,v)
        rawset(t,k,v)
    end,
    __index = function(t,k)
        return rawget(t,k)
    end,
    __call =  function(self)
        return self
    end
})

return pmiDataClient