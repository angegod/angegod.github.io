using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactTestApi.Models
{
    public class BookRecord
    {
        public BookRecord(string get_User,string get_Items)
        {
            customer = get_User;
            bookItems = get_Items;
            
        }

        public string customer { get; set; }
        
        public string bookItems { get; set; }

    }
}