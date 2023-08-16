using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.Persistence;
using ProEventos.Domain;
using ProEventos.Persistence.Contextos;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjetoController : ControllerBase
    {  
        private readonly ProEventosContext _context;
        public ProjetoController(ProEventosContext context )
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {

            return _context.Eventos;

        }
        [HttpGet("{id}")]
        public Evento GetById(int id)
        {

            return _context.Eventos.FirstOrDefault(Evento => Evento.Id == id);

        }
        [HttpPost]
        public string Post()
        {
            return "Metodo Post";
        }

        [HttpPut]
        public string Put()
        {
            return "Metodo Put";
        }
        [HttpDelete]
        public string Delete()
        {
            return "Metodo Delete";
        }
    }
}

