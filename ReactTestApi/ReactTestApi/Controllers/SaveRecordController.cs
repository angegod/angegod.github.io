using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Data.SqlClient;
using ReactTestApi.Models;
using Newtonsoft.Json;

namespace ReactTestApi.Controllers
{
    public class SaveRecordController : ApiController
    {
        [HttpPost]
        [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "POST")]
        public string Get()
        {

            string sendstring = Request.Content.ReadAsStringAsync().Result.ToString();

            BookRecord record = JsonConvert.DeserializeObject<BookRecord>(sendstring);

            string conn = "Server=TR\\SQLEXPRESS;Database=Product;uid=ange;pwd=ange0909;Trusted_Connection=True;MultipleActiveResultSets=True";

            SqlConnection mycon = new SqlConnection(conn);
            /*訂購記錄欄位:買家，訂購資訊，日期*/
            string sendRecord = "insert into Record (customer,bookItems,bookDate) values (@customer,@bookItems,@bookDate)";

            SqlCommand cmd = new SqlCommand(sendRecord, mycon);
            cmd.Parameters.Add("@customer", System.Data.SqlDbType.VarChar).Value = record.customer;
            cmd.Parameters.Add("@bookItems", System.Data.SqlDbType.VarChar).Value = record.bookItems;
            cmd.Parameters.Add("@bookDate", System.Data.SqlDbType.Date).Value = DateTime.Now;

            mycon.Open();
            cmd.ExecuteNonQuery();

            return "OK";
        }

    }
}
